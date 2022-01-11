/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitBySpace = s.split(' ');
    let splitAll = [];
    for (i = 0; i < splitBySpace.length; i ++) {
        let temp = splitBySpace[i].split('').reverse().join('');
        splitAll.push(temp);
    }
    return splitAll.join(' ')
    
};