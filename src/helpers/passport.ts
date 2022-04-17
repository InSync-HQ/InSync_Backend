import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { jwtSecret } from '../config';
import { UserModel } from '../models/User';
import { ProtectedReq } from '../types/types';
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
    passReqToCallback: true,
};

export default (passport: any) => {
    // Jwt strategy
    passport.use(new JWTStrategy(options, (req: ProtectedReq, jwt_payload: any, done: any) => {
        // user look up in the database
        UserModel.findOne({ _id: jwt_payload.sub }, function (err: any, user: any) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                req.user_id = jwt_payload.sub;
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}