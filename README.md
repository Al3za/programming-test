# programming-test

# Anagram task1

here we have a function callad anagram that take 2 parameters.

Once called, those parameters be firstly transformed toLowerCase(),

then splitted (split()) into an array of substrings: 
```
[ 'a', 'l', 'e', 'x' ]
```
then sorted (sort()) to get the letters in ascendig orders
```
[ 'a', 'e', 'l', 'x' ]
```
and finally joined (join()) again, so we can have again a string and no longer an array
```
aelx

```
Remember to expres what what you wanna join, in this case each string: join('')

If the parametrs where an anagrams we will have  a True response from the function, otherwise we will get False as response;


Now we want to test our function.

create a package.json file in your terminal: 
```
npm init -y
```

 install [Jest](https://jestjs.io/docs/getting-started)
```
npm i jest
```
 change your package.json this way: 
 ```
  "scripts": {
    "test": "jest"
  }

 ```
  create a new file, like Anagram.test.js. make sure the file name end with .test.js

export your 'Anagrams' function 
```
module.exports  = {anagram}

```
Import it on your 'Test' file 
```
const { anagram }=require('./Anagram');

```
and write the code this way
```
test("check if anagram",() => {
    expect(anagram('sameWord','WordSame')).toBe(true)
})
```
This code check if the 'expected' function anagram return true if the given parameters actually are anagrams.

To run the test, write the this on your terminal 
```
npm test
```
in a couple of seconds you will see if the code passed or failed





