/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    function getSlope(cor1, cor2) {
        const [x1, y1] =  cor1;
        const [x2, y2] = cor2;
        
        if(x1 === x2) return Infinity;
        
        return (y1 - y2) / (x1 - x2);
    }
    
    for(let i = 1; i < coordinates.length-1; i++) {
        const slope1 = getSlope(coordinates[i], coordinates[i-1]);
        const slope2 = getSlope(coordinates[i], coordinates[i+1]);
        
        if(slope1 !== slope2) return false;
    }
    
    return true;
};