import { User } from "../models/user.js";

// type QueryType = { $or: [{ username: string }, { passward: string }] };

class UserServices {
  static async getSingleUser(query) {
    const user = await User.findOne(query);
    return user;
  }

  static async userSignup(userData) {
    const user = await User.create(userData);
    user.save();
    return user;
  }
  static async getUserById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  static async deleteAll(){
    const deleteThem = await User.deleteMany();
    return deleteThem;
  }
}

export default UserServices;