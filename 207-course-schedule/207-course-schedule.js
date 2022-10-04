/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = new Map();
    
    for(let [v,e] of prerequisites) {
        if(map.has(v)) {
            let edges = map.get(v);
            edges.push(e);
            map.set(v, edges);
        } else {
            map.set(v, [e]);
        }
    }
    
    let checked = Array(numCourses).fill().map(_ => false);
    let currentCycle = Array(numCourses).fill().map(_ => false);
    
    function dfs(course) {
        if(currentCycle[course]) {
            return true;
        }
        
        if(checked[course]) {
            return false;
        }
        
        if(!map.get(course)) {
            checked[course] = true;
            return false;
        }
        
        currentCycle[course] = true;
        
        for(const req of map.get(course)) {
            if(dfs(req)) return true;
        }
        
        currentCycle[course] = false;
        
        checked[course] = true;
        
        return false;
    }
    
    for(let i = 0; i < numCourses; i++) {
        if(dfs(i)) return false;
    }
    
    return true;
};