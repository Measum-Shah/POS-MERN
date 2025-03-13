import mongoose from "mongoose";

// connectdb

const dbConnection = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected succesfully at ${conn.connection.host}`)
    }
    catch(error){
        console.log(`database connection failed due to ${error.message}`)
        process.exit(1)
    }
}

export default dbConnection