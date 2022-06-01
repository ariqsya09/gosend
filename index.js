
import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";
import path from "path";
import { saveGosend } from "./controller/gosendController.js";

// const path = require("path");
const app = express();
const __dirname = path.resolve();



mongoose.connect('mongodb://localhost:27017/customer',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=> console.log("Database Connected"));

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname+ '/public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/gosend',function(req,res){
    res.sendFile(path.join(__dirname+'/views/gosend.html'));
});

app.post('/gosend', function(req,res){
    res.json(req.body);
});

// app.use('/', route);

app.listen('3000',()=> console.log('server Running at port: 3000'));

