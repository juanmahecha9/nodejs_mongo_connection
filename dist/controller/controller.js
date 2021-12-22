"use strict";

var _Events = _interopRequireDefault(require("../models/Events"));

var _fs = _interopRequireDefault(require("fs"));

var _console = require("console");

var _locationHref = _interopRequireDefault(require("location-href"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexCtrl = {};

indexCtrl.mainRoute = async (req, res) => {
  res.send("Main route");
};

indexCtrl.eventRoute = async (req, res) => {
  const evento = new _Events.default({
    event_name: req.params.event,
    id_chat: req.params.id,
    date: new Date()
  });

  try {
    const done = await evento.save();
    res.json(done);
  } catch (err) {
    res.send(err);
  }
};

let show = "juan";

indexCtrl.eventRouteDropFile = async (req, res) => {
  let name_date = new Date().toString();
  const evento = await _Events.default.find();
  let data_temp = JSON.stringify(evento);

  _fs.default.writeFile("./src/public/doc/data.json", data_temp, err => {
    if (err) {
      throw _console.error;
    }

    console.log("ok");
  });

  res.render("index", {
    title: "EVENTS EZRA",
    evento: evento,
    show: true,
    url_download: "./src/public/doc/data.json"
  });
};

indexCtrl.eventRouteGet = async (req, res) => {
  const path = "./src/public/doc/data.json";

  if (_fs.default.existsSync(path)) {
    console.log("archivo existente");

    _fs.default.unlinkSync(path);
  }

  const evento = await _Events.default.find();
  let data_temp = JSON.stringify(evento);

  try {
    res.render("index", {
      title: "EVENTS EZRA",
      evento: evento,
      show: false
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = indexCtrl;
//# sourceMappingURL=controller.js.map