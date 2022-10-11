/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    let dist = points.map(([x,y]) => {
        return [x*x + y*y, x, y];
    })
    
    dist.sort((a,b) => a[0]-b[0]);
    
    return dist.slice(0,k).map(([_,x,y]) => [x,y]);
};