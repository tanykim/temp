/* 
Given an array of integers, every element appears twice except for one. Find that single one.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var sorted = nums.sort();
    if (sorted[0] !== sorted[1]) {
        return sorted[0];
    }
    for (var i = 1; i < sorted.length - 1; i++) {
        if (sorted[i] !== sorted[i-1] && sorted[i] !== sorted[i + 1]) {
            return sorted[i];
        }
    }
    return sorted[sorted.length - 1];
};
