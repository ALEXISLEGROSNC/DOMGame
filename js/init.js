import { generateGrid, refreshPositions, randomizeGrid, getMoveCount, getElapsedTime, getCurrentLevel } from './grid/grid.js';

window.onload = init;

function init() {
    console.log("Page et ressources prêtes à l'emploi");
    const grid = document.getElementById("grille");

    generateGrid(grid);
    randomizeGrid(grid);
    refreshPositions(grid);

    // Mettre à jour le score toutes les secondes
    setInterval(updateScore, 1000);
}

function updateScore() {
    const moveCount = getMoveCount();
    const elapsedTime = getElapsedTime();
    const currentLevel = getCurrentLevel();
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Niveau : ${currentLevel}, Mouvements : ${moveCount}, Temps : ${elapsedTime}s`;
}