import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from "../db/connectedToMongoDB.js";

const app = express();
const port = process.env.port || 5000;

dotenv.config();
app.use(express.json()); //to parse the incoming requests with json payloads from req.body
app.use("/api/auth" , authRoutes );

// app.get("/", (req, res)=>{
//     res.send("hello world ")
// })
app.listen(port, () => {
    connectToMongoDB();
    console.log(`server running on port ${port} `);
});
