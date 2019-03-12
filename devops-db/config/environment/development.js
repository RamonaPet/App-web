/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // Sequelize connection options
    sequelize: {
        uri: 'mysql://root:root@127.0.0.1:3306/devopsapp',
        options: {
            logging: false,
            operatorsAliases: false,
            storage: 'mysql',
            define: {
                timestamps: false
            }
        }
    },

    // Seed database on startup
    seedDB: true,
};