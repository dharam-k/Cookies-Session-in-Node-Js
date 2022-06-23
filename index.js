import cookieParser from "cookie-parser";
import session from 'express-session'
import express from "express";
import web from "./routes/web.js";
import connectDB from "./config.js";
import MongoStore from 'connect-mongo';
import env from 'dotenv';
env.config();

const app = express()
const port = 4000 || process.env.PORT
const db_url = process.env.DB_URL || 
app.use(cookieParser())

connectDB(db_url);

//mongodb session storage

const sessionStorage = MongoStore.create({
    mongoUrl: db_url,
    dbName : 'sessionNode',
    collectionName: 'sessions',
    ttl : 14*24*60*60,
    autoRemove : 'native'
})

app.use(session({
    name   : 'dharam',
    secret : 'iamkey',         
    resave : false,         
    saveUninitialized: true,  
    cookie : {maxAge:500000},
    store : sessionStorage
}))

app.use('/api', web)

app.listen(port, ()=>{
    console.log(`server run on : http://localhost:${port}`);
})