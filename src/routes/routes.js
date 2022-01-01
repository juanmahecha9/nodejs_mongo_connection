import { Router } from "express";
import  indexCrtl from "../controller/controller";

const router = Router();

router.get("/", indexCrtl.mainRoute);
router.post("/event/save/:id/:event", indexCrtl.eventRoute);
router.get("/events", indexCrtl.eventRouteGet);
router.get("/events/drop", indexCrtl.eventRouteDropFile);
router.get("/events/backup/", indexCrtl.eventRouteCreateBackup)
module.exports = router;
