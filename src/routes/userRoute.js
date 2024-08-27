import { Router } from "express";
import UserController from '../controller/userController.js';

const UserRoutes = Router();

UserRoutes.post(
  "/signup",
  UserController.registerUser
);
UserRoutes.post("/login", UserController.loginUser);
UserRoutes.post("/logout", UserController.logout);

export default UserRoutes;