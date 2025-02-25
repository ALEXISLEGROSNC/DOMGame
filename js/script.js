
window.onload = init;


function init() {
  console.log("Page et ressources prêtes à l'emploi");
  var grid = document.getElementById("grille");
  generateGrid(grid);
  randomizeGrid(grid);
  refreshPositions(grid);
}


function generateGrid(grid) {
  grid.innerHTML = '';
  var currentX = 0;
  var currentY = 0;
  for (var i = 0; i < 5 * 5; i++) {
    var cell = document.createElement('div');
    cell.setAttribute('data-x', currentX);
    cell.setAttribute('data-y', currentY);
    cell.classList.add('c' + (currentX + 1));

    grid.appendChild(cell);
    currentX++;
    if (currentX == 5) {
      currentX = 0;
      currentY++;
    }
  }
}


function moveUp(cell) {
//todo
}

function moveDown(cell) {
//todo
}

function moveLeft(cell) {
//todo
}

function moveRight(cell) {
//todo
}


function refreshPositions(grid){
  var elements = grid.getElementsByTagName('div');
  Array.from(elements).forEach(element => {
    element.style.transform = "translate(" + (element.dataset.x * 100) + "px," + (element.dataset.y * 100) + "px)";
    console.log("translate(" + (element.dataset.x * 20) + "px," + (element.dataset.y * 20) + "px)");
  });
}

function randomizeGrid(grid){
//todo
}

function getDomCellForCoordinates(x,y){
//todo
}

function checkForWin(grid){
//todo 
}