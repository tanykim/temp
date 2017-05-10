/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
    var rows = matrix.length;
    
    if (rows === 0) {
        return 0;
    }
    
    var cols = matrix[0].length;
    
    var area = [];
    
    var result = 0;
    
    //first row
    for (var i = 0; i < rows; i++) {
        area[i] = [];
        area[i][0] = parseInt(matrix[i][0]);
        result = Math.max(result, area[i][0]);
    }

    //first column
    for (var j = 0; j < cols; j++) {
        area[0][j] = parseInt(matrix[0][j]);
        result = Math.max(result, area[0][j]);
    }
    
    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            area[i][j] = +matrix[i][j];
            
            //if 1
            if (area[i][j] > 0) {
                //check neighbors
                var t = area[i - 1][j];
                var d = area[i - 1][j - 1];
                var l = area[i][j - 1];
                //valid neighbor value + 1
                area[i][j] = Math.min(t, d, l) + 1
            }
            result = Math.max(result, area[i][j]);
            
        }
    }
    return result * result;
    
};

console.log(maximalSquare(["10110", "10111", "11111", "10010"]));
