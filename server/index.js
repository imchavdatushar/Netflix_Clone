import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import Connection from "./db.js";
import route from "./routes/Routes.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use('/',route)

const PORT = 4000;

Connection();


app.listen(PORT, ()=> console.log(`Server started on PORT:${PORT}`))