import RiwayatOrder from "../models/RiwayatOrder.js";

//Get All Data
export const getRiwayatOrder = async (req,res) => {
    try {
        const riwayatOrders = await RiwayatOrder.find();
        res.json(riwayatOrders);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

export const getRiwayatOrderByID = async (req,res) => {
    try {
        const riwayatOrders = await RiwayatOrder.findById(req.params.id);
        res.json(riwayatOrders);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveRiwayatOrder = async (req,res) => {
    const riwayatOrder = new RiwayatOrder(req.body);
    try {
        const savedRiwayatOrder = await riwayatOrder.save();
        res.status(201).json(savedRiwayatOrder);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteRiwayatOrder = async (req,res) => {
    const cekId = await Order.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedRiwayatOrder = await Order.deleteOne({_id: req.params.id});
        res.status(200).json(deletedRiwayatOrder);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}