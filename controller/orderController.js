import Order from "../models/Order.js";

//Get All Data
export const getOrder = async (req,res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

export const getOrderByID = async (req,res) => {
    try {
        const orders = await Order.findById(req.params.id);
        res.json(orders);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveOrder = async (req,res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteOrder = async (req,res) => {
    const cekId = await Order.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedOrder = await Order.deleteOne({_id: req.params.id});
        res.status(200).json(deletedOrder);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}