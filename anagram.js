const anagram = (wordA, wordB) => {
    if (wordA.length != wordB.length) {
        return false;
    }

    let wordAArray = wordA.toLowerCase().split('');
    let wordBArray = wordB.toLowerCase().split('');

    wordAArray.forEach(char => {
        if (wordBArray.includes(char)) {
            wordBArray.splice(wordBArray.indexOf(char), 1);
        }
    });

    return wordBArray.length === 0;
}

console.log(anagram('henrique', 'john')); //false
console.log(anagram('henrique', 'enrieque')); //false
console.log(anagram('friend', 'finder')); //true
console.log(anagram('debit card', 'bad credit')); //true

