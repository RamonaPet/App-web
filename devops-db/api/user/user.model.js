import crypto from 'crypto';
var authTypes = ['github', 'twitter', 'facebook', 'google'];

var validatePresenceOf = function (value) {
    return value && value.length;
};

export default function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
        },
        username: {
            type: DataTypes.STRING,
            field: 'Username'
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                msg: 'The specified email address is already in use.'
            },
            validate: {
                isEmail: true
            },
            field: 'Email'
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user',
            field: 'Role'
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            },
            field: 'Password'
        },
        provider: {
            type: DataTypes.STRING,
            field: 'Provider'
        },
        salt: {
            type: DataTypes.STRING,
            field: 'Salt'
        },
        facebook: {
            type: DataTypes.STRING,
            field: 'Facebook'
        },
        twitter: {
            type: DataTypes.STRING,
            field: 'Twitter'
        },
        google: {
            type: DataTypes.STRING,
            field: 'Google'
        },
        github: {
            type: DataTypes.STRING,
            field: 'Github'
        }
        /*
        facebook: DataTypes.JSON,
        twitter: DataTypes.JSON,
        google: DataTypes.JSON,
        github: DataTypes.JSON
        //*/
    }, {
            /**
             * Virtual Getters
             */
            getterMethods: {
                // Public profile information
                profile() {
                    return {
                        name: this.name,
                        role: this.role
                    };
                },

                // Non-sensitive info we'll be putting in the token
                token() {
                    return {
                        id: this.id,
                        role: this.role
                    };
                }
            },

            /**
             * Pre-save hooks
             */
            hooks: {
                beforeBulkCreate(users, fields) {
                    var promises = [];
                    users.forEach(user => promises.push(user.updatePassword()));
                    return Promise.all(promises);
                },
                beforeCreate(user, fields) {
                    return user.updatePassword();
                },
                beforeUpdate(user, fields) {
                    if (user.changed('password')) {
                        return user.updatePassword();
                    }
                    return Promise.resolve(user);
                }
            },

        });

    /**
     * Instance Methods
     */

    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} password
     * @param {Function} callback
     * @return {Boolean}
     * @api public
     */

    User.prototype.authenticate = function (password, callback) {
        if (!callback) {
            return this.password === this.encryptPassword(password);
        }

        var _this = this;
        this.encryptPassword(password, function (err, pwdGen) {
            if (err) {
                callback(err);
            }

            if (_this.password === pwdGen) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        });
    };

    /**
     * Make salt
     *
     * @param {Number} [byteSize] - Optional salt byte size, default to 16
     * @param {Function} callback
     * @return {String}
     * @api public
     */

    User.prototype.makeSalt = function (...args) {
        let byteSize;
        let callback;
        let defaultByteSize = 16;

        if (typeof args[0] === 'function') {
            callback = args[0];
            byteSize = defaultByteSize;
        } else if (typeof args[1] === 'function') {
            callback = args[1];
        } else {
            throw new Error('Missing Callback');
        }

        if (!byteSize) {
            byteSize = defaultByteSize;
        }

        return crypto.randomBytes(byteSize, function (err, salt) {
            if (err) {
                callback(err);
            }
            return callback(null, salt.toString('base64'));
        });
    };

    /**
     * Encrypt password
     *
     * @param {String} password
     * @param {Function} callback
     * @return {String}
     * @api public
     */
    User.prototype.encryptPassword = function (password, callback) {
        if (!password || !this.salt) {
            return callback ? callback(null) : null;
        }

        var defaultIterations = 10000;
        var defaultKeyLength = 64;
        var salt = Buffer.from(this.salt, 'base64');

        if (!callback) {
            return crypto.pbkdf2Sync(password, salt, defaultIterations, defaultKeyLength, 'sha256')
                .toString('base64');
        }

        return crypto.pbkdf2(password, salt, defaultIterations, defaultKeyLength, 'sha256',
            function (err, key) {
                if (err) {
                    callback(err);
                }
                return callback(null, key.toString('base64'));
            });
    };

    /**
     * Update password field
     *
     * @param {Function} fn
     * @return {String}
     * @api public
     */
    User.prototype.updatePassword = function () {
        return new Promise((resolve, reject) => {
            if (!this.password) {
                return resolve(user);
            }

            if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1) {
                return reject(new Error('Invalid password'));
            }

            // Make salt with a callback
            return this.makeSalt((saltErr, salt) => {
                if (saltErr) {
                    return reject(saltErr);
                }
                this.salt = salt;
                return this.encryptPassword(this.password, (encryptErr, hashedPassword) => {
                    if (encryptErr) {
                        return reject(encryptErr);
                    }
                    this.password = hashedPassword;
                    return resolve(this);
                });
            });
        });
    };

    return User;
}