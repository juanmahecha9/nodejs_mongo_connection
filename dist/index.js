"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _network = _interopRequireDefault(require("./config/network.config"));

require("./database/config/database.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Index file to the project
const app = (0, _express.default)(); // concatenar el directorio de las vistas de motores de plantillas

app.set('views', _path.default.join(__dirname, '/views'));
app.use(_express.default.static(_path.default.join(__dirname, "/public")));
app.use(_express.default.urlencoded({
  extended: false
}));
app.set("view engine", "ejs");
app.use((0, _morgan.default)("dev"));
app.use(_routes.default);
app.use(_express.default.json());
app.set("port", process.env.PORT ? process.env.PORT : _network.default.port ? _network.default.port : 3000);
app.set("bind", process.env.BIND ? process.env.BIND : _network.default.bind ? _network.default.bind : "127.0.0.1");
app.listen(app.get("port"), app.get("bind"), () => {
  console.log("server running at http://localhost:" + app.get("port"));
});
//# sourceMappingURL=index.js.map