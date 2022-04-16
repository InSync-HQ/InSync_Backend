"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const User_1 = require("../../models/User");
class UserRepo {
    async create(user) {
        const createdUser = await User_1.UserModel.create(user);
        return createdUser.toObject();
    }
    async update(user) {
        return User_1.UserModel.updateOne({ _id: user._id }, { ...user })
            .lean()
            .exec();
    }
    async findByEmail(email) {
        return User_1.UserModel.findOne({ email }).lean().exec();
    }
    async findById(_id) {
        return User_1.UserModel.findById(_id).lean().exec();
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=UserRepo.js.map