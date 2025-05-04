import { moveUp, moveDown, moveLeft, moveRight } from './movement.js';

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

        document.onmousemove = null;
      };

      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  });
}