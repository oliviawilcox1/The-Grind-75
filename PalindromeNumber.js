var isPalindrome = function(x) {
    // Negative numbers and numbers ending in 0 (except 0 itself) are not palindromes
    // Convert number to string and then to an array of characters
     if (x < 0) return false;

    // Convert number to string and then to an array of characters
    let xString = x.toString();
    let left = 0;
    let right = xString.length - 1;

    // Use two-pointer technique to check for palindrome
    while (left < right) {
        if (xString[left] !== xString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};