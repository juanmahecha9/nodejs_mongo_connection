"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../connection/prod/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  const db = await _mongoose.default.connect(_config.default.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(db => console.log("DB is connected... ", db.connection.name)).catch(err => console.log("Error: ", err));
})();
//# sourceMappingURL=database.config.js.map