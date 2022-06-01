import mongoose from "mongoose";

const RiwayatOrder = mongoose.Schema({
    layanan:{
        type: String,
        required: true
    },
    dari:{
        type: String,
        required: true
    },
    menuju:{
        type: String,
        required: true
    },
    driver:{
        type: String,
        required: true
    },
    biaya:{
        type: String,
        required: true
    },
    tanggal:{
        type: String,
        required: true
    },
    deskripsi:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

export default mongoose.model('RiwayatOrders', RiwayatOrder);