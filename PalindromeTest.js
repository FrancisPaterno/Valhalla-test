

console.log('aaa', isPalindrome('aaa'));
console.log('abc', isPalindrome('abc'));
console.log('aba', isPalindrome('aba'));
function isPalindrome(input){
    let rev = reverse(input);
    if(input === rev){
        return true;
    }
    return false;
}

function reverse(input){
    if(input === null || input===''){
        return input;
    }
    return input.charAt(input.length-1) + reverse(input.substring(0, input.length-1));
}