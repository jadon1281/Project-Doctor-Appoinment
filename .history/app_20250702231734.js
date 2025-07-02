import express from 'express';
const express = require('express'); // ✅

import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
config({path: "./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

dbconnection();

export default app;