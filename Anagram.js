const anagram = (item1, item2) => {

    FirstWord = item1.toLowerCase().split('').sort().join('');
    SecondWord = item2.toLowerCase().split('').sort().join('');
    
    return FirstWord==SecondWord
};

//  const word1 = 'paolino';
//  const word2 = 'laopino';

 anagram('ale', 'lea');

module.exports  = {anagram}

 
//console.log(word1.split('').sort().join())

//const fruits = ["Banana", "Orange", "Apple", "Mango"];

//console.log( typeof(fruits.join()))