"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const Event_ = Schema({
  event_name: {
    type: String,
    required: true,
    trim: true
  },
  id_chat: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false
}); //module.exports =  mongoose.model("Event", Event_)

var _default = _mongoose.default.model("evento", Event_);

exports.default = _default;
//# sourceMappingURL=Events.js.map