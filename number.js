//JavaScript
// number veri türü tanımlamak
let price = 100;

let tax = 0.18;
let priceTax = price * tax;
let totalPrice = price + priceTax;
console.log(
  "Fiyat :",
  price,
  "KDV Orani : ",
  tax,
  "Kdv tutarı : ",
  priceTax,
  "Fiyat",
  totalPrice
);
let stringNumber = "11";
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("String to Number", Number("111"));

//arttırma ve azaltma işlemleri

let counter = 0;
counter = counter + 1; //uzun yöntem
counter += 1;
counter++;
console.log(counter);
counter--;
counter -= 1;

console.log(counter);
counter *= 10;
console.log(counter);
counter /= 2;
console.log(counter);

//islem önceliği
console.log(2 + 3 * 10); //32
console.log((2 + 3) * 10); //50

//mod alma
// Sayı tek mi çift mi ?
console.log(5 % 2 == 0 ? "Çift" : "Tek");
// 8 ürün alan kolide kaç tane kaldı ?
console.log("Koli Kalan Ürün ÖRNEĞİ : ", 18 % 8);

// üs alma

console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

//Asağı yuvarlama

console.log("Aşşağı yuvarlama", Math.floor(1.7));

//Yukarı yuvarlama
console.log("Yukarı yuvarlama", Math.ceil(2.3));

//Yakına yuvarlama

console.log("Yakına yuvarlama", Math.round(2.3));
