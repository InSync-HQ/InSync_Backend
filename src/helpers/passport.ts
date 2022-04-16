import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { jwtSecret } from '../config';
import { UserModel } from '../models/User';
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
};

export default (passport: any) => {
    // Jwt strategy
    passport.use(new JWTStrategy(options, function (jwt_payload, done) {
        // user look up in the database
        UserModel.findOne({ _id: jwt_payload.sub }, function (err: any, user: any) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}