//Define table and color variables. Get the grid size dom element and make anonymous function.
var table = document.getElementById("pixelCanvas")
var color = document.getElementById("colorPicker")
color.addEventListener("change",updateColor)
document.getElementById("sizePicker").addEventListener("submit", (e) => {
  e.preventDefault()
  makeGrid()
});
//make the grid function that will create and take away grid when a new one is submitted.
function makeGrid() {
  if (table.rows.length > 0){
    while(table.rows.length > 0){
      table.deleteRow(table.rows.length - 1)
    }
  }
  var height = document.getElementById("inputHeight").value
  var width = document.getElementById("inputWidth").value

  for(var i = 0; i < height; i++){
    var row = table.insertRow();
    for(var x = 0; x < width; x++){
      var cell = row.insertCell()
      cell.addEventListener("click", changeColor)
    }
  }
}
//made functions to have color 
function changeColor(){
  this.style.backgroundColor = color.value
}
function updateColor(){
  color = document.getElementById("colorPicker")
}
