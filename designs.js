// define constiables
const form = document.getElementById('sizePicker');
const grid = document.getElementById('pixelCanvas');

// function to create user defined grid
function makeGrid(height, width) {
  // loop over each row
  for (let y = 0; y < height; y++) {
    const row = grid.insertRow(y);
    // loop over each cell
    for (let x = 0; x < width; x++) {
      const cell = row.insertCell(x);
      // add event listener to define colour
      cell.addEventListener('click', function(e){
        const colour = document.getElementById('colorPicker').value;
        e.target.style.backgroundColor = colour;
      });
    }
  }
}
// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(event) {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  event.preventDefault(); //prevent submitting form to server
  grid.innerHTML = ''; // empty table
  makeGrid(height, width);
});
