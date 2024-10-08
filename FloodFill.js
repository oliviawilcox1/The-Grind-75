// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 

// Example 1:


// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.



var floodFill = function(image, sr, sc, color) {
    const queue = [[sr, sc]];
    const rowDir = [-1, 0, 1, 0];
    const colDir = [0, 1, 0, -1];

    while(queue.length > 0) {
        const curr = queue.pop();
        const currRow = curr[0];
        const currCol = curr[1];
        for (let i = 0; i < 4; i++) {
            const newRow = currRow + rowDir[i];
            const newCol = currCol + colDir[i];
            if(
                newRow < image.length
                && newRow >= 0
                && newCol < image[0].length
                && newCol >= 0
                && image[newRow][newCol] !== color
                && image[newRow][newCol] === image[currRow][currCol]
            ) {
                queue.unshift([newRow, newCol]);
            }
        }
        image[currRow][currCol] = color
    }
    
    return image;
};

function floodFill(image, startRow, startCol, newColor) {
    const originalColor = image[startRow][startCol];
    
    // If the starting pixel already has the new color, return the image as is
    if (originalColor === newColor) return image;
    
    const directions = [
        [1, 0],  // move down
        [-1, 0], // move up
        [0, 1],  // move right
        [0, -1]  // move left
    ];

    // Recursive DFS function to fill connected components
    function fill(row, col) {
        // Check if the current pixel is out of bounds or not the original color
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== originalColor) {
            return;
        }

        // Change the color of the current pixel
        image[row][col] = newColor;

        // Recursively apply flood fill to all 4-directionally connected pixels
        for (let [rowOffset, colOffset] of directions) {
            fill(row + rowOffset, col + colOffset);
        }
    }

    // Start the flood fill process from the starting pixel
    fill(startRow, startCol);

    return image;
}
