import express from "express";
import { gumzoChat } from "../controllers/gumzoChatController.js";
import { jibuChat } from "../controllers/jibuChatController.js";
import { kejeliChat } from "../controllers/kejeliChatController.js";
import { rafikiChat } from "../controllers/rafikiChatController.js";

const router = express.Router();
router.route("/gumzo").post(gumzoChat);
router.route("/jibu").post(jibuChat);
router.route("/rafiki").post(rafikiChat);
router.route("/kejeli").post(kejeliChat);

export default router;
