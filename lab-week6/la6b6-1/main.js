function switchColors() {
  // Get all the table cells
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    // Toggle the color class between black and white
    cells[i].classList.toggle("black");
    cells[i].classList.toggle("white");
  }
}
