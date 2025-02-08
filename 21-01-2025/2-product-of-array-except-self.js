var productExceptSelf = function(nums) {
    
    const ans = new Array(nums.length).fill(1);
    let prefix = 1;
    let suffix = 1;

    for (let i=0; i<nums.length; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }
    for (let i=nums.length-1; i>=0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    return ans;
};