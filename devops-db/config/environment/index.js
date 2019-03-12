/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(`${__dirname}/../../..`),

    // Server port
    port: process.env.PORT || 9000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // Should we populate the DB with sample data?
    seedDB: false,

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'my-app1-secret'
    },

    facebook: {
        clientID: process.env.FACEBOOKid || 'id',
        clientSecret: process.env.FACEBOOK_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/facebook/callback`
    },

    twitter: {
        clientID: process.env.TWITTERid || 'id',
        clientSecret: process.env.TWITTER_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/twitter/callback`
    },

    google: {
        clientID: process.env.GOOGLEid || 'id',
        clientSecret: process.env.GOOGLE_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/google/callback`
    }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    all,
    require('./shared').default,
require(`./${process.env.NODE_ENV}.js`) || {});