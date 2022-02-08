let items = [1, 2, 3, 4, 5];

//array içinde array

let femaleUsers = ["Ayse", "Hulya", "Merve"];

let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers); //başına eklemek

console.log(items);

items.push(maleUsers); //sonuna eklemek

console.log(items);

console.log(items.length);

console.log(items[0].length); //Array içindeki istedğimiz arrayın length bilgisini aldık.
console.log(items[0][0]); ///Ayşe bilgisine ulaştık.

//Array içerisinden öğe ayırmak.

let newItems = items.splice(1, 5);
console.log("items", items);
console.log("newItems",  newItems);

//Array içerisindeki öğrenin index bilgisini bulmak indexOf(value)

items.unshift("lorem" );
items.push("ipsum" );

console.log(items.indexOf("ipsum"));

//Array kopyalamak

let copyItems = items;
console.log(items);
copyItems.pop();//Son öğeyi çıkar
console.log("copyItems",copyItems)
console.log("Items:",items);

copyItems = items.slice();
copyItems.pop();//Son öğeyi çıkar
console.log("Kopyalandıktan sonraki hali")
console.log("copyItems",copyItems)
console.log("Items:",items);

let es6Items = [...items];// es 6 ve sonrasında gelen kopyalama işlemi

console.log(es6Items);
let allUsers = [...femaleUsers,...maleUsers];//es 6 birden çok birleştirmek.

console.log(allUsers);

console.log(allUsers.toString());
console.log(allUsers.join(" --- "));//İstediğimiz ayraça göre birleştirme String

//İstediğimiz index bilgisine göre eklemek

allUsers.splice(allUsers.length-1,0,"Melisa");
allUsers.splice(Math.floor(allUsers.length / 2),0,"Lorem");
console.log(allUsers);