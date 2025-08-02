import { Router } from "express";
import { addToHistory, getUserActivity, login, register } from "../controllers/user.controller.js";


const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserActivity);

export default router;
