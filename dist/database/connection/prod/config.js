"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  mongodbURL: process.env.MONGODB_URI_prod
};
exports.default = _default;
//# sourceMappingURL=config.js.map