import Gosend from "../models/Gosend.js";

export const getGosend = async (req,res) => {
    try {
        const gosends = await Gosend.find();
        res.json(gosends);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}
export const getGosendByID = async (req,res) => {
    try {
        const gosend = await Gosend.findById(req.params.id);
        res.json(gosend);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const saveGosend = async (req,res) => {
    const gosend = new Gosend(req.body);
    try {
        const savedGosend = await gosend.save();
        res.status(201).json(savedGosend);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateGosend = async (req,res) => {
    const cekId = await Gosend.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const updatedGosend = await Gosend.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedGosend);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteGosend = async (req,res) => {
    const cekId = await Gosend.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedGosend = await Gosend.deleteOne({_id: req.params.id});
        res.status(200).json(deletedGosend);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
