var numIslands = function(grid) {
    let island_count = 0;

    function dfsIterative(col, row) {
        // Use a stack to simulate recursion iteratively
        const stack = [[col, row]];

        while (stack.length > 0) {
            const [c, r] = stack.pop();

            // Continue only if within grid bounds and on land ('1')
            if (c < 0 || c >= grid.length || r < 0 || r >= grid[0].length || grid[c][r] === "0") {
                continue;
            }

            // Mark cell as visited
            grid[c][r] = "0";

            // Push neighboring cells to the stack
            stack.push([c - 1, r]); // up
            stack.push([c + 1, r]); // down
            stack.push([c, r - 1]); // left
            stack.push([c, r + 1]); // right
        }
    }

    // Loop through each cell in the grid
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            // Start an iterative DFS if we find unvisited land ('1')
            if (grid[col][row] === '1') {
                island_count++;
                dfsIterative(col, row);
            }
        }
    }

    return island_count;
};
