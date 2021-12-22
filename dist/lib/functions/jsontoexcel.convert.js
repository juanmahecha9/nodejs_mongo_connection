"use strict";

var _xlsx = _interopRequireDefault(require("xlsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const convertToExcel = data => {
  const EXCEL_TYPE = 'applicarion/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF8';
  const EXCEL_EXTENSION = 'xlsx';

  const worksheet = _xlsx.default.utils.json_to_sheet(data);

  const workbook = {
    Sheets: {
      'data': worksheet
    },
    SheetNames: ['data']
  };

  const excelBuffer = _xlsx.default.write(workbook, {
    bookType: 'xlsx',
    type: 'xlsx'
  });

  console.log(excelBuffer);
  saveAsExcel(excelBuffer, "file");
};

function saveAsExcel(Buffer, filename) {
  const data = new Blob([Buffer], {
    type: "EXCEL_TYPE"
  });
  saveAs(data, filename + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

module.exports = convertToExcel;
//# sourceMappingURL=jsontoexcel.convert.js.map