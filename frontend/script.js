let text = "Client";
console.log(text);
let splittedText = text.split("").reverse().join("");
console.log(splittedText);

function numberWords(text){
   let words = text.split(' ')
   let wordsLength = []
   words.forEach((text) => {
    wordsLength.push(text + " = " + text.length)

   });
   return wordsLength
};
console.log(numberWords(text));

function threeWord(text){
    let words = text.split(' ')
    let wordsLength = []
    words.forEach((text) => {
     wordsLength.push(text + " = " + (text.length*3))
 
    });
    return wordsLength
};
console.log(threeWord(text));

function fiveWord(text){
    let words = text.split(' ')
    let wordsLength = []
    words.forEach((text) => {
     wordsLength.push(text + " = " + (text.length/5))
 
    });
    return wordsLength
};
console.log(fiveWord(text));