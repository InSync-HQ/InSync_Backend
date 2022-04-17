import IArticle, { ArticleModel } from "../../models/Article";

export default class ArticleRepo {
    public static async create(article: IArticle): Promise<IArticle> {
        article.createdAt = article.updatedAt = new Date();
        const createdUser = await ArticleModel.create(article);
        return createdUser.toObject() as IArticle;
    }
    public static async update(article: IArticle): Promise<IArticle> {
        article.updatedAt = new Date;
        return ArticleModel.findOneAndUpdate({ _id: article._id }, { ...article }, { new: true })
            .lean<IArticle>()
            .exec();
    }
    public static async findById(_id: string): Promise<IArticle> {
        return ArticleModel.findById(_id).lean<IArticle>().exec();
    }
    public static async findByArticleUrl(article_url: string): Promise<IArticle> {
        return ArticleModel.findOne({ article_url }).lean<IArticle>().exec();
    }
    public static async fetchAll(): Promise<IArticle[]> {
        return ArticleModel.find({}).lean<IArticle[]>().exec();
    }
}