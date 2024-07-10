// 1 misol

// function checkNum(n){
//     if(n > 0 && n < 9){
//         alert("Bir xonali")
//     }
//     if (n > 10 && n < 99){
//         alert("Ikki xonali")
//     }
// }
// checkNum(2)

// 2 misol

// function checkNum(n){
//     let count = 0
//     for(let i = 0; i < n.length; i++){
//         if(n[i] >= '0' && n[i] <= '9'){
//             count++
//         }
//     }
//     return count
// }
// let exampleString = "Salom 123, bu yerda 4 ta son bor.";
// let numberOf = checkNum(exampleString);
// console.log("Argument sifatida berilgan sonlar soni: " + numberOf); 

// 3 misol

// function countWordsWithA(str) {
//     let count = 0;
//     let words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes('a') || words[i].includes('A')) {
//             count++;
//         }
//     }

//     return count;
// }

// let exampleString = "Abdullox.";
// let numberOfWordsWithA = countWordsWithA(exampleString);
// console.log("Argument sifatida yozilgan 'a' harfi ishtirok etgan so'zlar soni: " + numberOfWordsWithA); 

// 4 misol

// function minMaxWord(str) {
//     let words = str.split(' ');
//     let minWord = words[0];
//     let maxWord = words[0];

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < minWord.length) {
//             minWord = words[i];
//         }
//         if (words[i].length > maxWord.length) {
//             maxWord = words[i];
//         }
//     }

//     return { minWord: minWord, maxWord: maxWord };
// }

// let exampleString = "Men dasturlash kursida o'qiyman";
// let result = minMaxWord(exampleString);
// console.log(result); 


// 5 misol

// function createObject(arr) {
//     return arr.reduce((acc, str) => {
//         acc[str] = str.length;
//         return acc;
//     }, {});
// }

// let exampleArray = ["text", "world", "laptop"];
// let result = createObject(exampleArray);
// console.log(result); 

// 7 misol

// let arr = [1,23,4,55,2]
// function findCenter(){
//     for(let i = 0; i < arr.length; i++){
//         if(arr % 5 == 1){
//             return arr[2]
//         }
//     }
// }
// console.log(arr[2])

// Qoshimcha

let trueFalse