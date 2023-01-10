import * as XLSX from "xlsx";

export const getTodosFromExcel = async (file, addTodos) => {
  var fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);
  var elements = [];
  fileReader.onload = async (e) => {
    let arrayBuffer = fileReader.result;
    var data = new Uint8Array(arrayBuffer);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i)
      arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");
    var workbook = XLSX.read(bstr, { type: "binary" });
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    var rawData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    rawData = rawData.map((todo, index) => {
      return {
        id: new Date().getTime() + index,
        description: extractRowData(Object.values(todo)),
        done: false,
      };
    });
    addTodos(rawData);
  };
};

const extractRowData = (row) => {
  let data = "";
  for (const value of row) {
    data += value + " | ";
  }
  return data;
};
