import EVENT_ from "../models/Events";
import fs from "fs";
import { error } from "console";
import {state300,state400, state500} from '../common/error_messages'

const indexCtrl = {};

indexCtrl.mainRoute = async (req, res) => {
  res.send("Main route");
};

indexCtrl.eventRoute = async (req, res) => {
  const evento = new EVENT_({
    event_name: req.params.event,
    id_chat: req.params.id,
    date: new Date(),
  });
  try {
    const done = await evento.save();
    res.json(done);
  } catch (err) {
    res.send(err);
  }
};

indexCtrl.eventRouteDropFile = async (req, res) => {

  const evento = await EVENT_.find();
  let data_temp = JSON.stringify(evento);
  fs.writeFile(`./src/public/doc/data.json`, data_temp, (err) => {
    if (err) {
      throw error;
    }
    console.log("ok");
  });

  res.render("index", {
    title: "EVENTS EZRA",
    evento: evento,
    show : true,
    url_download: `./src/public/doc/data.json`
  });
};

indexCtrl.eventRouteGet = async (req, res) => {
  const path = "./src/public/doc/data.json";
  if (fs.existsSync(path)) {
    console.log("archivo existente");
    fs.unlinkSync(path);
  }
  const evento = await EVENT_.find();
  let data_temp = JSON.stringify(evento);
  let date = new Date();
  try {
    res.render("index", {
      title: "EVENTS EZRA",
      evento: evento,
      show : false,
      date: date
    });
  } catch (err) {
    res.send(err);
  }
};

indexCtrl.eventRouteCreateBackup = async (req, res) =>{
  let name_date = new Date().toString();
  const evento = await EVENT_.find();
  let count_data_ = evento.length.toString()
  let data_temp = JSON.stringify(evento);
  fs.writeFile(`./src/public/doc/backup/backup_db_${count_data_}_${name_date}.json`, data_temp, (err) => {
    if (err) {
      throw error;
    } else{
      res.send("backup creado ...")
    }
  });
}


module.exports = indexCtrl;
