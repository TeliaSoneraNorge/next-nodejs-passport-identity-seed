'use strict';

var Strategy = require('passport-openidconnect').Strategy;

// set issuer' specific OIDC endpoints
var IDENTITY_ISSUER = 'https://login.telia.io/realms/telia';
var IDENTITY_ISSUER_ENDPOINT = IDENTITY_ISSUER + '/protocol/openid-connect';
// set client credentials
var CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
var CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';


module.exports = function (passport) {

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    // set passport to use OpenIdConnect strategy
    passport.use('provider',
        new Strategy({
                issuer: IDENTITY_ISSUER,
                authorizationURL: IDENTITY_ISSUER_ENDPOINT + '/auth',
                tokenURL: IDENTITY_ISSUER_ENDPOINT + '/token',
                userInfoURL: IDENTITY_ISSUER_ENDPOINT + '/userinfo',
                clientID: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                callbackURL: "http://localhost:3000/auth/callback",
                scope: ['oidc']
            },
            function(accessToken, refreshToken, profile, next) {
                return next(null, profile);
            }
    ));
};