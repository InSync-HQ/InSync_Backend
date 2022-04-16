"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = require("../../models/Article");
class ArticleRepo {
    async create(user) {
        const createdUser = await Article_1.ArticleModel.create(user);
        return createdUser.toObject();
    }
    async update(user) {
        return Article_1.ArticleModel.updateOne({ _id: user._id }, { ...user })
            .lean()
            .exec();
    }
    async findById(_id) {
        return Article_1.ArticleModel.findById(_id).lean().exec();
    }
}
exports.default = ArticleRepo;
//# sourceMappingURL=ArticleRepo.js.map