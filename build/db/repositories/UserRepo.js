"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
class UserRepo {
    static async create(user) {
        const createdUser = await User_1.UserModel.create(user);
        return createdUser.toObject();
    }
    static async update(user) {
        return User_1.UserModel.updateOne({ _id: user._id }, { ...user })
            .lean()
            .exec();
    }
    static async findByEmail(email) {
        return User_1.UserModel.findOne({ email }).lean().exec();
    }
    static async findById(_id) {
        return User_1.UserModel.findById(_id).lean().exec();
    }
}
exports.default = UserRepo;
//# sourceMappingURL=UserRepo.js.map