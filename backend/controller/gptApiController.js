import OpenAI from "openai";
import { GPT_API, GENRATE_IMAGE_ENDPOINT } from "../config/index.js";
import axios from "axios";

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

  //image create method
  async createImage(req, res) {
    const { input } = req.body;
    const response = await axios.post(
      GENRATE_IMAGE_ENDPOINT,
      {
        prompt: input,
        n: 1,
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${GPT_API}`,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(response.data.data);
    res.status(200).json({ res: response.data.data });
  },
};

export default gptApiController;
