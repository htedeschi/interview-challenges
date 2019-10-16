const palindrome = str => {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}

console.log(palindrome('Arara')); // true
console.log(palindrome('civic')); // true
console.log(palindrome('henrique')); // false
console.log(palindrome('computer')); // false