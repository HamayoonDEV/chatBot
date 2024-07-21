import OpenAI from "openai";
import { GPT_API } from "../config/index.js";
import Joi from "joi";

const openai = new OpenAI({
  apiKey: GPT_API,
});

const gptApiController = {
  // generate response
  async generateResponse(req, res) {
    const { input } = req.body;
    let response;
    try {
      response = await openai.completions.create({
        model: "gpt-3.5-turbo",
        max_tokens: 1,
        temperature: 0,
        prompt: input,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ response: response.data.choices[0].text });
  },
};

export default gptApiController;
