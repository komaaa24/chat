function islandPerimeter(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let perimeter = 0;
    let cycle = 0;

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            cycle++;
            if (grid[row][col] === 1) {
                let cellPerimeter = 4;
                //tepa
                if (row > 0 && grid[row - 1][col] === 1) {
                    cellPerimeter--;
                }
                if (col < numCols - 1 && grid[row][col + 1] === 1) {
                    cellPerimeter--;
                }
                if (row < numRows - 1 && grid[row + 1][col] === 1) {
                    cellPerimeter--;
                }
                if (col > 0 && grid[row][col - 1] === 1) {
                    cellPerimeter--;

                }
                perimeter += cellPerimeter;
            }
        }
    }
    return perimeter;
}
const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
console.log(islandPerimeter(grid)); // Output: 16