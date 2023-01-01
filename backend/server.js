// Write the Backend tasks here
let cica = "Server";
let timeOut = 1000;
console.log(cica);
let kacsa = cica.split("").reverse().join("");
console.log(kacsa);

function numberWords(cica){
   let words = cica.split(' ')
   let wordsLength = []
   words.forEach((cica) => {
    wordsLength.push(cica + " = " +cica.length)

   });
   return wordsLength
};
console.log(numberWords(cica));

function threeWord(cica){
    let words = cica.split(' ')
    let wordsLength = []
    words.forEach((cica) => {
     wordsLength.push(cica + " = " +(cica.length*3))
 
    });
    return wordsLength
};
console.log(threeWord(cica));

function fiveWord(cica){
    let words = cica.split(' ')
    let wordsLength = []
    words.forEach((cica) => {
     wordsLength.push(cica + " = " +(cica.length/5))
 
    });
    return wordsLength
};
console.log(fiveWord(cica));