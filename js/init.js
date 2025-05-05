import { generateGrid, refreshPositions, randomizeGrid, getMoveCount, getElapsedTime } from './grid/grid.js';

window.onload = init;

function init() {
    console.log("Page et ressources prêtes à l'emploi");
    const grid = document.getElementById("grille");

    generateGrid(grid);
    randomizeGrid(grid);
    refreshPositions(grid);

    // Mise à jour du score
    setInterval(updateScore, 1000);
}

function updateScore() {
    const moveCount = getMoveCount();
    const elapsedTime = getElapsedTime();
    const movesElement = document.getElementById("moves");
	const timerElement = document.getElementById("timer");
	const scoreElement = document.getElementById("score");
    movesElement.textContent = `Mouvements : ${moveCount}`;
	timerElement.textContent = `Temps écoulé : ${elapsedTime}s`;
	scoreElement.textContent = `Score : ${Math.max(0, 100 - moveCount - elapsedTime)}`; // à revoir
}