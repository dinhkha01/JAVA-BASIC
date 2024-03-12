function addRow() {
  var table = document.getElementById("myTable");

  var newRow = table.insertRow(-1);

  for (var i = 0; i < 3; i++) {
    var newCell = newRow.insertCell(i);
    newCell.innerHTML = "Cell " + (i + 1) + " row " + table.rows.length;
  }
}
