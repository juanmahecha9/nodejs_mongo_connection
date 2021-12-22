//Index file to the project
import express from "express";
import path from "path";
import morgan from "morgan";
import router from "./routes/routes";
import network from "./config/network.config";
import "./database/config/database.config"

const app = express();


// concatenar el directorio de las vistas de motores de plantillas
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(router);
app.use(express.json())
app.set(
  "port",
  process.env.PORT ? process.env.PORT : network.port ? network.port : 3000
);
app.set(
  "bind",
  process.env.BIND
    ? process.env.BIND
    : network.bind
    ? network.bind
    : "127.0.0.1"
);
app.listen(app.get("port"), app.get("bind"), () => {
  console.log("server running at http://localhost:" + app.get("port"));
});