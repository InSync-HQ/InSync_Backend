import { CommunityModel, ICommunity } from "../../models/Community";


export class CommunityRepo {
    public async create(community: ICommunity): Promise<ICommunity> {
        const createdCommunity = await CommunityModel.create(community);
        return createdCommunity.toObject() as ICommunity;
    }

    public async update(community: ICommunity): Promise<any> {
        return CommunityModel.updateOne({ _id: community._id }, { ...community })
            .lean<ICommunity>()
            .exec();
    }
    public async findById(_id: string): Promise<ICommunity> {
        return CommunityModel.findById(_id).lean<ICommunity>().exec();
    }
}