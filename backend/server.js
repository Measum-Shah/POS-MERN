import express from "express";
import morgan from "morgan";
import cors from "cors"
import { configDotenv } from "dotenv";
import dbConnection from "./config/config.js";
import itemsRoutes  from "./routes/itemRoutes.js";



// rest objects
const app = express();

// dotenv config
configDotenv()

// db config
dbConnection();


// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))


// routes
app.use("/api/v1/item", itemsRoutes)

// listen
app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at the port = ${process.env.port}`)
})

