import { IUser, UserModel } from "../../models/User";

export default class UserRepo {
    public static async create(user: IUser): Promise<IUser> {
        const createdUser = await UserModel.create(user);
        return createdUser.toObject() as IUser;
    }
    public static async update(user: IUser): Promise<IUser> {
        return UserModel.findOneAndUpdate({ _id: user._id }, { ...user }, { new: true })
            .lean<IUser>()
            .exec();
    }
    public static async findByEmail(email: string): Promise<IUser> {
        return UserModel.findOne({ email }).lean<IUser>().exec();
    }
    public static async findById(_id: string): Promise<IUser> {
        return UserModel.findById(_id).lean<IUser>().exec();
    }
}