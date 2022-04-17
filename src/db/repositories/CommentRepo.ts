import IComment, { CommentModel } from '../../models/Comment'
export default class CommunityRepo {
    public static async create(comment: IComment): Promise<IComment> {
        comment.createdAt = comment.updatedAt = new Date();
        const createdUser = await CommentModel.create(comment);
        return createdUser.toObject() as IComment;
    }
    public static async update(comment: IComment): Promise<any> {
        comment.updatedAt = new Date();
        return CommentModel.findOneAndUpdate({ _id: comment._id }, { ...comment }, { new: true })
            .lean<IComment>()
            .exec();
    }
    public static async fetchAll(): Promise<IComment[]> {
        return CommentModel.find({}).lean<IComment[]>().exec();
    }
    public static async fetchByArticleId(article_id: string): Promise<IComment> {
        return CommentModel.findOne({ article_id }).lean<IComment>().exec();
    }
    public static async findById(_id: string): Promise<IComment> {
        return CommentModel.findById(_id).lean<IComment>().exec();
    }
}