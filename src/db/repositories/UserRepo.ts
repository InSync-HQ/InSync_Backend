import { IUser, UserModel } from "../../models/User";

export class UserRepo {
    public async create(user: IUser): Promise<IUser> {
        const createdUser = await UserModel.create(user);
        return createdUser.toObject() as IUser;
    }
    public async update(user: IUser): Promise<any> {
        return UserModel.updateOne({ _id: user._id }, { ...user })
            .lean<IUser>()
            .exec();
    }
    public async findByEmail(email: string): Promise<IUser> {
        return UserModel.findOne({ email }).lean<IUser>().exec();
    }
    public async findById(_id: string): Promise<IUser> {
        return UserModel.findById(_id).lean<IUser>().exec();
    }
}