import dotnev from "dotenv";

dotnev.config();

const PORT = process.env.PORT;
const GPT_API = process.env.GPT_API;
const GENRATE_IMAGE_ENDPOINT = process.env.GENRATE_IMAGE_ENDPOINT;

export { PORT, GPT_API, GENRATE_IMAGE_ENDPOINT };
