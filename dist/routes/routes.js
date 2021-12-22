"use strict";

var _express = require("express");

var _controller = _interopRequireDefault(require("../controller/controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _controller.default.mainRoute);
router.post("/event/save/:id/:event", _controller.default.eventRoute);
router.get("/events", _controller.default.eventRouteGet);
module.exports = router;
//# sourceMappingURL=routes.js.map