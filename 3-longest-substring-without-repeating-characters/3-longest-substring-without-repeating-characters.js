/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestLength = 0;
    let ls = "";
    
    for (i = 0; i < s.length; i ++) {
        ls = ls.substring(ls.indexOf(s[i]) + 1);
        ls += s[i];
        
        if (ls.length > longestLength) {
            longestLength = ls.length;
        }
    }
    return longestLength;
};