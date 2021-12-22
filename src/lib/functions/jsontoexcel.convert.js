import XLSX from "xlsx";

const convertToExcel = (data) => {
  const EXCEL_TYPE = 'applicarion/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF8'
  const EXCEL_EXTENSION = 'xlsx'

  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = {
      Sheets: {
          'data': worksheet
      },
      SheetNames: ['data']
  }
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'xlsx'})
  console.log(excelBuffer)
  saveAsExcel(excelBuffer, "file")
};

function saveAsExcel (Buffer, filename){
    const data = new Blob([Buffer], {type: "EXCEL_TYPE"})
    saveAs(data,filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION)
}
module.exports = convertToExcel;
