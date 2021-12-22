"use strict";

var _Events = _interopRequireDefault(require("../models/Events"));

var _fs = _interopRequireDefault(require("fs"));

var _console = require("console");

var _jsontoexcel = _interopRequireDefault(require("../lib/functions/jsontoexcel.convert"));

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

indexCtrl.eventRouteGet = async (req, res) => {
  await _fs.default.unlinkSync("./src/public/doc/data.json");
  setTimeout(function () {}, 1000);
  const evento = await _Events.default.find();
  let data_temp = JSON.stringify(evento);

  try {
    _fs.default.writeFile("./src/public/doc/data.json", data_temp, err => {
      if (err) {
        throw _console.error;
      }

      console.log("ok");
    });

    res.render('index', {
      title: 'EVENTS EZRA',
      evento: evento
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = indexCtrl;
//# sourceMappingURL=controller.js.map