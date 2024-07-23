import express from "express";
import gptApiController from "../controller/gptApiController.js";

const router = express.Router();

//gpt endPoints;
//genrate chat endpoint
router.post("/chat", gptApiController.generateResponse);
//genrate image endpoint
router.post("/image", gptApiController.createImage);

export default router;
