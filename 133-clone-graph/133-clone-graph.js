/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    let map = new Map();
    
    function dfs(node) {
        if(map.has(node)) return map.get(node);
        const copy = new Node(node.val);
        map.set(node, copy);
        node.neighbors.forEach(neighbor => {
            copy.neighbors.push(dfs(neighbor));
        })
        return copy;
    }
    dfs(node);
    return map.get(node);
};