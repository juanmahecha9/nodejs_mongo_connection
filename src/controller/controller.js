import EVENT_ from "../models/Events";
import fs from "fs";
import { error } from "console";
import location from "location-href";

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
let show = "juan"

indexCtrl.eventRouteDropFile = async (req, res) => {
  const evento = await EVENT_.find();
  let data_temp = JSON.stringify(evento);
  fs.writeFile("./src/public/doc/data.json", data_temp, (err) => {
    if (err) {
      throw error;
    }
    console.log("ok");
  });

  res.render("index", {
    title: "EVENTS EZRA",
    evento: evento,
    show : true
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
  try {
    res.render("index", {
      title: "EVENTS EZRA",
      evento: evento,
      show : false
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = indexCtrl;
