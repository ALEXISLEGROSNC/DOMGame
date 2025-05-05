import { moveUp, moveDown, moveLeft, moveRight } from './movement.js';
import { checkForWin } from '../utils/winCheck.js';
import { incrementMoveCount, getMoveCount } from './grid.js'; 

export function attachOnclickEvents(grid) {
	const elements = grid.getElementsByTagName('div');

	Array.from(elements).forEach(element => {
		let startX, startY;

		element.onmousedown = function(event) {
		startX = event.clientX;
		startY = event.clientY;

		document.onmousemove = function(event) {
			const diffX = event.clientX - startX;
			const diffY = event.clientY - startY;

			if (Math.abs(diffX) > Math.abs(diffY)) {
			if (diffX > 0) {
				moveRight(element);
			} else {
				moveLeft(element);
			}
			} else {
			if (diffY > 0) {
				moveDown(element);
			} else {
				moveUp(element);
			}
			}

			incrementMoveCount(); 
			console.log("Nombre de mouvements : " + getMoveCount());

			if (checkForWin(grid)) {
				console.log("Bravo, vous avez gagné !");
				// TODO : Next level or reset game
			}

			document.onmousemove = null;
		};

		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		};
		};
	});
}