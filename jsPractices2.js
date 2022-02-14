//JavaScript
//Bir dizide tekrarlanan değerleri tek'e düşürmek
let setFruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];

let uniqueFruits = Array.from(new Set(setFruits));
let uniqueFruits2 = [...new Set(setFruits)];
console.log("Tekrarlanan Değerler", uniqueFruits2);

// Bir dizideki belirli değerleri değiştirmek

setFruits.splice(0, 2, "potato", "tomato");
console.log("Splice", setFruits);

//Map olmadan Map Array Oluşturmak

let friends = [
  { name: "John", age: 22 },
  { name: "Peter", age: 23 },
  { name: "Mark", age: 24 },
  { name: "Maria", age: 21 },
  { name: "Monica", age: 22 },
  { name: "Martha", age: 19 },
];

let friendsNames = Array.from(friends, ({ name }) => name);

console.log("Map Array", friendsNames);

//Diziyi Boşaltmak

friends.length = 0;
console.log("Diziyi Boşaltmak", friends);

//Diziyi Nesneye Dönüştürmek Object

let fruitsO = ["apple", "banana", "orange"];

let fruitsObj = { ...fruitsO };

console.log("Meyveler Dizisi to Obje", fruitsObj);

//Diziyi Doldurmak aynı değerlerle

let newArray = new Array(10).fill(1);

console.log("Diziyi Doldurmak", newArray);
//Spread Operator (...) Without Concat Combine
let fruits = ["apple", "banana", "orange"];

let meat = ["poultry", "beef", "fish"];

let vegetables = ["potato", "tomato", "cucumber"];

let food = [...fruits, ...meat, ...vegetables];

console.log("Spread Operator", food);

//Tekrar Eden Sayılar Duplicated Numbers
let numOne = [0, 2, 4, 6, 8, 8];
let numTwo = [1, 2, 3, 4, 5, 6];

let duplicatedValues = [...new Set(numOne)].filter(
  (item) => numTwo.includes(item)
  //   !numTwo.includes(item)
);
console.log("Dizi 1", numOne, "Dizi 2", numTwo);
console.log("İki Dize İçinde Kesişen Değerler", duplicatedValues);

//Diziden Fake Değerleri geçersiz değerleri kaldırmak

let mixedArr = [0, "blue", "", NaN, 9, true, undefined, "white", false];

let trueArr = mixedArr.filter(Boolean);

console.log("Geçersiz Değerleri Kaldırmak", trueArr);

//Diziden rastgele(Random) değer almak

let colors = [
  "blue",
  "white",
  "green",
  "navy",
  "pink",
  "purple",
  "orange",
  "yellow",
  "black",
  "brown",
];

let randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log("Rastgele Renk ", randomColor);

// Diziyi ters çevirme reverse()

let reversedColors = colors.reverse();
console.log("Ters Çevirme", reversedColors);

//Verilen elemanın son oluşumunun indeksini bulmak

let nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];

let lastIndex = nums.lastIndexOf(5);
console.log("Son oluşumun indeksi", lastIndex);

//Dizideki tüm değerlerin toplanması reduce()

let nums2 = [1, 5, 2, 6];
let sum = nums2.reduce((x, y) => x + y);
console.log("Dizedeki değerlerin toplamı ", sum);


// // Hackerrank stringi index'in tek ve çift olmasına göre 2'ye bölmek

// function processData(input) {
//   //Enter your code here
//    let trimst = input.split("\n");
 
//   let n = parseInt(trimst[0]);
 
//    for(let i = 0; i<n; i++){
//      let m = trimst[i+1];
//      let l = m.length;
//      let arr = m.split("");
//      let ra = "";
//      let rb = "";
     
    
//     for(let j = 0; j<l; j ++){
//       if(j % 2 == 0 ){
//         ra += arr[j];
//       }else{
//         rb += arr[j];
//       }
     
//     }
//   console.log(ra + " " + rb)
//    }
   
 
   
 
 
  
//  }
   
 
//  process.stdin.resume();
//  process.stdin.setEncoding("ascii");
//  _input = "";
//  process.stdin.on("data", function (input) {
//    _input += input;
//  });
 
//  process.stdin.on("end", function () {
//    processData(_input);
//  });
 
