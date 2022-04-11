import { CommunityModel, ICommunity } from "../../models/Community";


export class CommunityRepo {
    public async create(community: ICommunity) {
        try {
            const createdCommunity = await CommunityModel.create(community);
        } catch (err) {
            return err;
        }
    }
}