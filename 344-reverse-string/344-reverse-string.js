/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
        n = s.length
        half = Math.floor(n / 2);
        for (i = 0; i < half; i ++) {
            let temp = s[n-i-1];
            s[n-i-1] = s[i];
            s[i] = temp;
    }
};