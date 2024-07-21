import express from "express";
import gptApiController from "../controller/gptApiController.js";

const router = express.Router();

//gpt endPoints;
router.post("/chat", gptApiController.generateResponse);

export default router;
