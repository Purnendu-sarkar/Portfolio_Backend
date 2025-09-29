import compression from "compression";
import cors from "cors";
import express from "express";
import { router } from "./routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";



const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

app.use("/api/v1", router);


app.get("/", (_req, res) => {
  res.send("Portfolio Backend Running");
});

app.use(globalErrorHandler)

export default app;