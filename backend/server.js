import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import connectToMongoDB from "../db/connectedToMongoDB.js";

const app = express();
const port = process.env.port || 5000;

dotenv.config();
app.use(express.json()); //to parse the incoming requests with json payloads from req.body
app.use(cookieParser());
app.use("/api/auth" , authRoutes );
app.use("/api/messages" , messageRoutes );
app.use("/api/users" , userRoutes );

// app.get("/", (req, res)=>{
//     res.send("hello world ")
// })
app.listen(port, () => {
    connectToMongoDB();
    console.log(`server running on port ${port} `);
});
