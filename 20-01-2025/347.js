/* 

    The Question: 

    Top K Frequent Elements

*/

// The Solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = new Map();
    let ans = [];
    for(let i=0; i<nums.length; i++) {
        if(freqMap.has(nums[i])) {
            let val = freqMap.get(nums[i]);
            val++;
            freqMap.set(nums[i],val);
        }
        else freqMap.set(nums[i],1)
    }

    let sortedArray = Array.from(freqMap).sort((a,b) => b[1] - a[1]);

    for(let i=0; i<k; i++) ans.push(sortedArray[i][0]);

    return ans;
};