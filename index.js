import cookieParser from "cookie-parser";
import express from "express";
import web from "./routes/web.js";

const app = express()
const port = 4000

app.use(cookieParser())

app.use('/api', web)

app.listen(port, ()=>{
    console.log(`server run on : http://localhost:${port}`);
})