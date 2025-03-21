import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required: true
    }
},
{
    timestamp : true
})

const items = mongoose.model("items", itemSchema);
export default items;