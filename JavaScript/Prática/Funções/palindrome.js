function checkPalindrome(inputString) {

    let x = inputString.length - 1;
    var palindrome = '';

    for(x; x >= 0; x--) {
        palindrome += inputString[x]
    }

    if (palindrome === inputString) {
        return true
    } else {
        return false
    }

}

console.log(checkPalindrome('aabaa'))