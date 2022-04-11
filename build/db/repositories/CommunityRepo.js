"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityRepo = void 0;
const Community_1 = require("../../models/Community");
class CommunityRepo {
    async create(community) {
        try {
            const createdCommunity = await Community_1.CommunityModel.create(community);
        }
        catch (err) {
            return err;
        }
    }
}
exports.CommunityRepo = CommunityRepo;
//# sourceMappingURL=CommunityRepo.js.map