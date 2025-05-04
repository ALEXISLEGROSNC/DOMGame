import { generateGrid, refreshPositions, randomizeGrid } from './grid/grid.js';

window.onload = init;

function init() {
  console.log("Page et ressources prêtes à l'emploi");
  const grid = document.getElementById("grille");
  generateGrid(grid);
  refreshPositions(grid);
  randomizeGrid(grid);
  refreshPositions(grid);
}