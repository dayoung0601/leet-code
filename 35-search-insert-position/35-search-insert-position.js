var searchInsert = function(nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] < target) {
            i ++;
        } else if (target <= nums[i] ) {
            return i;
        } 
    }
    return i;
};