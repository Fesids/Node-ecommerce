import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {Request, Response} from "express";
import {createProxyMiddleware, fixRequestBody} from "http-proxy-middleware"
import {} from "express-session"
import {} from "express-rate-limit"
import "response-time"
import {} from "helmet"
import proxy from "express-http-proxy";
import httpProxy from "express-http-proxy";
import request from "request-promise-native";
import { Auth, isAdmin, isEmployee } from "./AuthenticationMiddleware/AuthenticationAlies";



const main = ()=>{
    config();
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());

    

    const port = process.env.PORT || 8002;
    const categoryService = httpProxy("http://127.0.0.1:8000/api/v1/category");
    
    

    const baseAPIRoute = "http://127.0.0.1:8000/api/v1/"

   

    const openEndpoints = [""]

    app.use("/api/v1/category/detail/:categoryId",Auth, isEmployee,createProxyMiddleware({
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws:true,
    
        //pathRewrite: {"^/api/v1/"}
    }));

    app.use("/api/v1/category/save", Auth,isAdmin,createProxyMiddleware({
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws:true,
    
        //pathRewrite: {"^/api/v1/"}
    }));

    app.use("/api/v1/auth/login", createProxyMiddleware({
        target: "http://127.0.0.1:8001/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));

    app.use("/api/v1/auth/register/:role", createProxyMiddleware({
        target: "http://127.0.0.1:8001/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));

    


    app.listen(port, ()=>{
        console.log(`The gateway has started at port ${port}`)
    })

}

main();