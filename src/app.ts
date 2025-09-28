import compression from "compression";
import cors from "cors";
import express from "express";



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


app.get("/", (_req, res) => {
  res.send("Portfolio Backend Running");
});



export default app;