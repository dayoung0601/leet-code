function search(nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === target) {
            return i;
        }
        i ++;
    }
    return -1;
};