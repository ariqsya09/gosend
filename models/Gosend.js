import mongoose from "mongoose";

const Gosend = mongoose.Schema({
    namaPengirim:{
        type: String,
        required: true
    },
    noTelpPengirim:{
        type: String,
        required: true
    },
    alamatPengirim:{
        type: String,
        required: true
    },
    namaPenerima:{
        type: String,
        required: true
    },
    noTelpPenerima:{
        type: String,
        required: true
    },
    alamatPenerima:{
        type: String,
        required: true
    },
    jenisBarang:{
        type: String,
        required: true
    },
    beratBarang:{
        type: String,
        required: true
    },
});

export default mongoose.model('Gosends', Gosend);