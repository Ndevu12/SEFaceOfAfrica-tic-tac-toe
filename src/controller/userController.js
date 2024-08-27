import { User } from "../models/user.js";
import { generate, check } from '../helpers/password.js';
import { sign } from "../helpers/jwtToken.js";
import UserServices from "../services/userServices.js";
import { blackListedTokens } from "../middlewares/authentication.js";

class UserController {
  static async registerUser(req, res) {
    try {
      const { username, password, email, role } = req.body;

      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        res
          .status(400)
          .json({ message: "Username, password or email already exists" });
        return;
      }

      const strongPassward = await generate(password);

      const newUser = { ...req.body };
      newUser.password = strongPassward;

      const user = await UserServices.userSignup(newUser);

      res.status(201).json({message: "Signed up successful", username});
    } catch (error) {
      res.status(201).json({message: (error).message || "Soryy, something went wrong"});
    }
  }

  // Method to login User
  static async loginUser(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({message: 'Username or password is required'});
      }
      const user = await UserServices.getSingleUser({
        $or: [{ username: username }],
      });

      if (!user) {
        return res.status(400).json("Invalid username or password")
      }

      const hashedPassword = user.password;

      const comparedPassword = check(hashedPassword, password);

      if (!comparedPassword) return res.status(400).json("Invalid username or password")

      const accessToken = sign({
        id: user._id,
        email: user.email,
        role: user.role,
      });

      const userObject = {
        username: user.username,
      };

      userObject.accessToken = accessToken;

      return res.status(200).json({message: "logged in successful", data: userObject})
    } catch (error) {
      console.error("Error logging in User:", error);
      res.status(500).json({ error: "Sorry, Something went wrong" });
    }
  }

  // logout method

  static async logout(req, res) {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) throw new Error("Access denied");

      blackListedTokens.add(token);

      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.error("Error logging out:", error);
      res.status(500).json({ error: "Error while logging you out." });
    }
  }
}

export default UserController;