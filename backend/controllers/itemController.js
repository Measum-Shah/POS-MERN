import req from "express/lib/request.js"
import items from "../models/item.model.js"
import res from "express/lib/response.js"

 const getItemController = async(req,res)=>{
    try{
        const item = await items.find()
        res.status(200).send(item)
    }
    catch(error){
        console.log("We cant find items due to error: ", error )
    }
}

// add


const addItemController = async (req, res) => {
    try {
        // const newItem = new items(req.body); // Use correct model reference
        // await newItem.save();
        const newItem = await items.collection.insertOne(req.body);
        res.status(201).json({ message: "Item added successfully" });
    } catch (error) {
        res.status(400).json({ message: "Item addition failed", error: error.message });
    }
};

export default addItemController;




export {getItemController,addItemController};


