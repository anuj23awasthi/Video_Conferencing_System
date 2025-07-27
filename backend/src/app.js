import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import {connectToSocket} from "./controllers/socketManger.js";

import cors from "cors";
import usersRoutes from "./routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true, limit: "40kb"}));

app.use("/api/v1/users", usersRoutes);



const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://apnavideocall:zoomclone@cluster0.17iazc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Server is running on port 8000");
    });
}

start();