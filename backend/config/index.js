import dotnev from "dotenv";

dotnev.config();

const PORT = process.env.PORT;
const GPT_API = process.env.GPT_API;

export { PORT, GPT_API };
