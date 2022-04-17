import { CommunityModel, ICommunity } from "../../models/Community";
export default class CommunityRepo {
    public static async create(community: ICommunity): Promise<ICommunity> {
        const createdUser = await CommunityModel.create(community);
        return createdUser.toObject() as ICommunity;
    }
    public static async update(community: ICommunity): Promise<any> {
        return CommunityModel.findOneAndUpdate({ _id: community._id }, { ...community }, { new: true })
            .lean<ICommunity>()
            .exec();
    }
    public static async fetchAll(): Promise<ICommunity[]> {
        return CommunityModel.find({}).lean<ICommunity[]>().exec();
    }
    public static async fetchByName(name: string): Promise<ICommunity> {
        return CommunityModel.findOne({ name }).lean<ICommunity>().exec();
    }
    public static async findById(_id: string): Promise<ICommunity> {
        return CommunityModel.findById(_id).lean<ICommunity>().exec();
    }
}