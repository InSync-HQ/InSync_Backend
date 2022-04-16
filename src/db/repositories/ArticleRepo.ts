import IArticle, { ArticleModel } from "../../models/Article";

export default class ArticleRepo {
    public async create(user: IArticle): Promise<IArticle> {
        const createdUser = await ArticleModel.create(user);
        return createdUser.toObject() as IArticle;
    }
    public async update(user: IArticle): Promise<any> {
        return ArticleModel.updateOne({ _id: user._id }, { ...user })
            .lean<IArticle>()
            .exec();
    }
    public async findById(_id: string): Promise<IArticle> {
        return ArticleModel.findById(_id).lean<IArticle>().exec();
    }
    public async deleteById(_id: string): Promise<IArticle> {
        return ArticleModel.findByIdAndDelete(_id).lean<IArticle>().exec();
    }
}