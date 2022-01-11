var solution = function(isBadVersion) {
    
    return function(n) {
        if (n === 1) return 1;
        
        let lo = 1;
        let hi = n;
        let mid = 0;
        
        while (lo <= hi) {
            mid = lo + Math.floor((hi-lo)/2)
            if (isBadVersion(mid)) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        
        return lo;
    };
};