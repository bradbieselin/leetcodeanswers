/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[1,0], [-1,0], [0,-1], [0,1]];
    
    let numOfIslands = 0;
    
    function isIB(r,c) {
        return r >= 0 && c >= 0 && r < m && c < n;
    }
    
    function flood(r,c) {
        if(isIB(r,c) && grid[r][c] === "1") {
            grid[r][c] = "0";
            directions.forEach(([dr, dc]) => flood(r+dr, c+dc));
        }
    }
    
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(grid[r][c] === "1") {
                flood(r,c);
                numOfIslands++;
            }
        }
    }
    
    return numOfIslands;
};