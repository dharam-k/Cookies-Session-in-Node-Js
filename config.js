import mongoose from "mongoose";
import env from 'dotenv';
env.config();


const connectDB =async (DB_URL)=>{
    try {
        const DB_OPTIONS ={
            dbName : 'sessionNode'
        }
        await mongoose.connect(DB_URL, DB_OPTIONS)
        console.log('Connection success')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;