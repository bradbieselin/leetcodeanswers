/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) return image;
    
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let m = image.length;
    let n = image[0].length;
    let oldColor = image[sr][sc];
    
    function isIB(r,c) {
        return r >= 0 && c >= 0 && r < m && c < n;
    }
    
    function flood(r,c) {
        if(isIB(r,c) && image[r][c] === oldColor) {
            image[r][c] = newColor;
            directions.forEach(([dr,dc]) => flood(r+dr, c+dc));
        }
    }
    
    flood(sr,sc);
    return image;
};