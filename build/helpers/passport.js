"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("../config");
const User_1 = require("../models/User");
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.jwtSecret
};
exports.default = (passport) => {
    // Jwt strategy
    passport.use(new passport_jwt_1.Strategy(options, function (jwt_payload, done) {
        // user look up in the database
        User_1.UserModel.findOne({ _id: jwt_payload.sub }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
};
//# sourceMappingURL=passport.js.map