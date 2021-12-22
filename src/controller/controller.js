import EVENT_ from "../models/Events";
import fs from 'fs'
import { error } from "console";

const indexCtrl = {};

indexCtrl.mainRoute = async (req, res) =>{
    res.send("Main route");
}

indexCtrl.eventRoute = async (req, res) =>{
    const evento = new EVENT_({
        event_name:req.params.event,
        id_chat:req.params.id,
        date: new Date()
    })
    try{
       const done = await evento.save()
        res.json(done);
    }catch(err){
        res.send(err);
    }   
}

indexCtrl.eventRouteGet = async (req, res) =>{
    const evento = await EVENT_.find();
    let data_temp = JSON.stringify(evento)
    try{
        fs.writeFile("data.txt", data_temp, (err)=>{
            if(err){
                throw error;
            }
            console.log("ok")
        })
        res.render('index',{
            title: 'EVENTS EZRA',
            evento: evento
        })
    }catch(err){
        res.send(err);
    }
}

module.exports = indexCtrl;