/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    function backtrack(start, current) {
        if(start === current.length) {
            return result.push([...current]);
        }
        for(let i = start; i < current.length; i++) {
            swap(current, start, i);
            backtrack(start+1, current);
            swap(current, start, i);
        }
    }
    
    backtrack(0, nums);
    return result;
};


function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}