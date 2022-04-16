import jsonwebtoken from "jsonwebtoken";
import { jwtSecret } from "../config";
import { IUser } from "../models/User";


export default (user: IUser) => {
    const _id = user._id;
    const expiresIn = '300d';
    const payload = {
        sub: _id,
        iat: Date.now()
    };

    const signedToken = jsonwebtoken.sign(payload, jwtSecret, { expiresIn: expiresIn });

    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}
