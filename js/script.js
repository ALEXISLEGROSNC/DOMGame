
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

  attachOnclickEvents(grid);
}

function attachOnclickEvents(grid) {
  var elements = grid.getElementsByTagName('div');
  Array.from(elements).forEach(element => {
    element.onclick = function() {
      var cell = CellFromDom(element);
      moveLeft(element);
    };
  });
}

function moveUp(domCell) {
//todo
}

function moveDown(domCell) {
//todo
}

function moveLeft(domCell) {
  
  var grid = document.getElementById("grille");
  var domCells = grid.getElementsByTagName('div');
  
  var rowCells = Array.from(domCells).filter(element => parseInt(element.dataset.y) === parseInt(domCell.dataset.y));

  rowCells.forEach(cell => {
    var x = parseInt(cell.dataset.x);
    cell.dataset.x = (x + 1) % 5;
  });

  refreshPositions(grid);
}

function moveRight(domCell) {
//todo
}


function refreshPositions(grid){
  var elements = grid.getElementsByTagName('div');
  Array.from(elements).forEach(element => {
    element.style.transform = "translate(" + (element.dataset.x * 100) + "px," + (element.dataset.y * 100) + "px)";
  });
}

function randomizeGrid(grid){
//todo
}

function DomFromCell(x, y) {
  var grid = document.getElementById("grille");
  var elements = grid.getElementsByTagName('div');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (parseInt(element.getAttribute('data-x')) === x && parseInt(element.getAttribute('data-y')) === y) {
      return element;
    }
  }
  return null; // Si aucun élément n'est trouvé
}

function CellFromDom(domCell) {
  return {
    x: parseInt(domCell.getAttribute('data-x')),
    y: parseInt(domCell.getAttribute('data-y'))
  };
}



window.checkForWin = function(grid){
//todo 
}