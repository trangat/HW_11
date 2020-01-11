// // from data.js
var tableData = data;
var tbody = d3.select("tbody");

// create initial table and loop through all data points to add them to the table
function initialTable(data) {
    // remove existing table content
    tbody.html("");
    // create the loop  & loop through the data
    data.forEach((record) => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
// create filter function by datetime
function filterUFO(){
    let filtered = tableData
    var inputUser = d3.select("#datetime").property("value");
    if (inputUser) {
        filtered = tableData.filter(ufoInfo => ufoInfo.datetime === inputUser)};
    console.log(filtered)
    initialTable(filtered)
};
var button = d3.select("#filter-btn");
button.on("click", filterUFO);

initialTable(tableData)

