import express from "express";
import { PORT } from "./config/index.js";
import router from "./routes/index.js";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(router);
app.listen(PORT, console.log(`server is running on PORT:${PORT}`));
