export function checkForWin(grid) {
    const couleurs = getGridColors(grid);

    // Vérifier les colonnes
    for (let x = 0; x < couleurs[0].length; x++) {
        const couleur = couleurs[0][x];
        let win = true;
        for (let y = 0; y < couleurs.length; y++) {
            if (couleurs[y][x] !== couleur) {
                win = false;
                break;
            }
        }
        if (win) {
            return true; // Une colonne complète a la même couleur
        }
    }

    // Vérifier les lignes
    for (let y = 0; y < couleurs.length; y++) {
        const couleur = couleurs[y][0];
        let win = true;
        for (let x = 0; x < couleurs[y].length; x++) {
            if (couleurs[y][x] !== couleur) {
                win = false;
                break;
            }
        }
        if (win) {
            return true; // Une ligne complète a la même couleur
        }
    }

    // Si aucune ligne ou colonne ne remplit les conditions, pas de victoire
    return false;
}

function getGridColors(grid) {
    const size = Math.sqrt(grid.children.length); // Calculer la taille de la grille
    const cells = Array.from(grid.getElementsByClassName('cell'));

    // Construire un tableau 2D des couleurs
    const couleurs = [];
    for (let y = 0; y < size; y++) {
        const row = [];
        for (let x = 0; x < size; x++) {
            const cell = cells.find(
                c => parseInt(c.getAttribute('data-x')) === x && parseInt(c.getAttribute('data-y')) === y
            );
            row.push(cell ? cell.getAttribute('data-color') : null);
        }
        couleurs.push(row);
    }
    return couleurs;
}