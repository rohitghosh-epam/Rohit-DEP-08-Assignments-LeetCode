
function two_sum(nums) {
    let arr = new Number[2];
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]+nums[j]==target) {
                arr[0]=i;
                arr[1]=j;
            }
        }
    }
    return arr;
}