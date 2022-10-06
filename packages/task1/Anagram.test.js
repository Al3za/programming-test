

const { anagram }=require('./Anagram');

test("check if anagram",() => {
    expect(anagram('sameWord','WordSame')).toBe(true)
}) // notice that here i used te lowercase function to do more evidend exemple;


