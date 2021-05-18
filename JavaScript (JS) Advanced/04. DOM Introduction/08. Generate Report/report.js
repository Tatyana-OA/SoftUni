function generateReport(colNames) {
  let resultArr = []; // resultArr will hold each generated object
  let namesArr = []; // namesArr will hold all the Column names that are checked
  let indexes = []; // indexes will hold the indexes of the checked columns so they can be used to select the correct <td> in the rows
  let obj = {};
  let columnNames = Array.from(
    document.querySelectorAll('th input[type="checkbox"]')
  );
  let tableRows = Array.from(document.querySelectorAll("tbody tr"));
  //iterate through all the columns with checkboxes
  for (let i = 0; i < columnNames.length; i++) {
    let columnName = columnNames[i];
    let parentText = columnName.parentNode.textContent; // the text of eech column
    if (columnName.checked === true) {
      // collecting all checked ones as their textContent and their indexes
      namesArr.push(parentText);
      indexes.push(i);
    }
  }
  for (let j = 0; j < tableRows.length; j++) {
    //iterate through rows to get all values for each column
    let tableRow = tableRows[j].children;
    for (let index of indexes) {
      // iterate through the indexes of checked columns
      let correctTd = tableRow[index].textContent; // select only the td's at the position of the checked columns in each row
      let name = columnNames[index].parentNode.textContent; // select the name of the column at that same index from all column names
      obj[name.toLowerCase().trim()] = correctTd; // trim and lowerCase cuz Judge, that's why...
    }
    resultArr.push(obj); // push individual object into result array (=> holds the info from each row and all checked td's)
    obj = {}; // clear object to hold next values in next iteration
  }
  let outputArea = document.querySelector("#output"); //select output area
  outputArea.value = JSON.stringify(resultArr); // JSON the result
}

//TODO
