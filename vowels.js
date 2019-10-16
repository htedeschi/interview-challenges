const countVowels = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            counter++;
        }
    }

    return counter;
}

console.log(countVowels('henrique')); // 4
console.log(countVowels('why')); // 0
console.log(countVowels('computer')); // 3