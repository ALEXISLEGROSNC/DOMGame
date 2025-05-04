import { attachOnclickEvents } from './events.js';
import { moveLeft, moveRight, moveUp, moveDown } from './movement.js';

export function generateGrid(grid) {
  grid.innerHTML = '';
  let currentX = 0;
  let currentY = 0;
  for (let i = 0; i < 5 * 5; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-x', currentX);
    cell.setAttribute('data-y', currentY);
    cell.classList.add('c' + (currentX + 1));

    grid.appendChild(cell);
    currentX++;
    if (currentX === 5) {
      currentX = 0;
      currentY++;
    }
  }

  attachOnclickEvents(grid);
}

export function refreshPositions(grid) {
  const elements = grid.getElementsByTagName('div');
  Array.from(elements).forEach(element => {
    element.style.transform = `translate(${element.dataset.x * 100}px, ${element.dataset.y * 100}px)`;
  });
}

export function randomizeGrid(grid) {
  const elements = Array.from(grid.getElementsByTagName('div'));
  const moves = [moveLeft, moveRight, moveUp, moveDown];
  const numMoves = 100;

  for (let i = 0; i < numMoves; i++) {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    randomMove(randomElement);
  }

  refreshPositions(grid);
}