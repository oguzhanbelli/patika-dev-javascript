// Array oluşturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

let emptyArray = [];

//array icerisindeki eleman/ooge sayisii öğrenmek

console.log(items.length);


//array içerisindeki ilk elemanın çağrılması

console.log(items[0]);

//array içerisindeki son elemanın çağrılması

console.log(items[items.length-1]);

//degisken içindeki bilginin Array olup olmadığının kontrol edilmesi
console.log(typeof items); // object olarak çıktı veriyor
console.log(Array.isArray(items));

