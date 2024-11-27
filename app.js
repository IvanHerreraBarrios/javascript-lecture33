var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    function solutionRec(start, end){
        const middle = Math.floor((end-start) / 2) + start
        const bad = isBadVersion(middle)

        if(bad) {
            return solutionRec(start, middle - 1)
        } else if(middle === end){
            return middle + 1
        } else {
            return solutionRec(middle + 1, end)
        }
    }
    return function(n) {
        return solutionRec(1, n)
    };
};


//solution 2

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
    let right = n;
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        
        if (isBadVersion(mid)) {
            right = mid;  // If mid is bad, search in the left half (including mid)
        } else {
            left = mid + 1;  // If mid is good, search in the right half (excluding mid)
        }
    }
    
    return left;  // When left == right, it's the first bad version
    };
};