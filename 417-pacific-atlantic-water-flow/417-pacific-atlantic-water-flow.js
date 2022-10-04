/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length;
    let n = heights[0].length;
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    function isIB(r,c) {
        return r >= 0 && c >= 0 && r < m && c < n;
    }
    
    let pacific = Array(m).fill().map(_ => Array(n).fill(false));
    let atlantic = Array(m).fill().map(_ => Array(n).fill(false));
    
    function dfs(r,c, ocean, prevHeight) {
        if(isIB(r,c) && heights[r][c] >= prevHeight && !ocean[r][c]) {
            ocean[r][c] = true;
            directions.forEach(([dr,dc]) => dfs(r+dr,c+dc, ocean, heights[r][c]));
        }
    }
    
    for(let r = 0; r < m; r++) {
        dfs(r, 0, pacific, 0);
        dfs(r, n-1, atlantic, 0);
    }
    
    for(let c = 0; c < n; c++) {
        dfs(0, c, pacific, 0);
        dfs(m-1, c, atlantic, 0);
    }
    
    let result = [];
    
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(pacific[r][c] && atlantic[r][c]) {
                result.push([r,c]);
            }
        }
    }
    return result;
};