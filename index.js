import cookieParser from "cookie-parser";
import session from 'express-session'
import express from "express";
import web from "./routes/web.js";

const app = express()
const port = 4000

app.use(cookieParser())

app.use(session({
    name: 'dharam',
    secret : 'iamkey',         
    resave : false,         
    saveUninitialized: true,  
    //ookie : {path: '/', httpOnly: true, secure:false, maxAge:5000}  
}))

app.use('/api', web)

app.listen(port, ()=>{
    console.log(`server run on : http://localhost:${port}`);
})