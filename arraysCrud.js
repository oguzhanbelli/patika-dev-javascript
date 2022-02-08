let items = [10,20,30,40];

console.log("items ilk hali",items);


//Array sona eleman eklemek -> push

items.push(50);

console.log("50 : ",items);

//array başa öğe eklemek

items.unshift(5);

console.log("5 : ",items);

//Array sondaki öğeyi çıkarmak

let lastItem = items.pop();// son elemanı lastıtem içerisne ekledik
console.log(lastItem,items);

//Array baştaki öğeyi çıkarmak

let firstItem = items.shift();

console.log("First İtem:",firstItem,items);

//Array içindeki bir öğenin bilgisinin değiştirilmesi


//ilk eleman

items[0] = 5;
console.log(items);
//son eleman 

items[items.length -1] = 100;
console.log(items);

