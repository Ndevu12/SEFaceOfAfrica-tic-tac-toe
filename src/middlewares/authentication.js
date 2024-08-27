
import { verify } from "../helpers/jwtToken.js";

export const blackListedTokens = new Set();


export const isAdmin = async (
  req,
  res,
  next
) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      console.log(
        "Acess denied, You are not allowed to perform this action. Please"
      );
      throw new Error(
        "Acess denied, You are not allowed to perform this action. Please "
      );
    }
    const token = authHeader.replace("Bearer ", "");

    if (blackListedTokens.has(token)) {
      console.log("Token blacklisted");
      res
        .status(403)
        .json({
          message:
            "Access denied. Your current TOKEN HAD BEEN blacklisted. Please log in again.",
        });
      return;
    }

    const user = verify(token);

    if (user.role !== "admin") {
      console.log("Acess denied");
      res
      .status(403)
      .json({
        message:
        "Acess denied",
      });
      return;
    }
    req.user = user;
    return next();
  } catch (error) {
      res
      .status(401)
      .json({message: "Not Authorized TO perform this action"})
    return;
  }
};