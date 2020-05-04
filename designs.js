// define variables
var form = document.getElementById("sizePicker");
var grid = document.getElementById("pixelCanvas");

// function to create user defined grid
function makeGrid(height, width) {
  // loop over each row
  for (var y = 0; y < height; y++) {
    var row = grid.insertRow(y);
    // loop over each cell
    for (var x = 0; x < width; x++) {
      var cell = row.insertCell(x);
      // add event listener to define colour
      cell.addEventListener("click", function(e){
        var colour = document.getElementById("colorPicker").value;
        e.target.style.backgroundColor = colour;
      });
    }
  }
}
// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function(event) {
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  event.preventDefault(); //prevent submitting form to server
  grid.innerHTML = ""; // empty table
  makeGrid(height, width);
});
