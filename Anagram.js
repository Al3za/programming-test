const anagram = (item1, item2) => {

    FirstWord = item1.toLowerCase().split('').sort().join('');
    SecondWord = item2.toLowerCase().split('').sort().join('');
    
    return FirstWord==SecondWord
};

const word1 = 'alex';
const word2 = 'aexa'

anagram(word1,word2)

module.exports  = {anagram}

