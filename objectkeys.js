let laptop1 = {
  brand: "Apple",
  model: "Macbook Pro",
  "2kg": 2,
};

console.log(laptop1);

//Doğru Anahtar bilgisi oluşturmak
console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);

//Anahtar bilgisine yeni değer eklemek

laptop1.brand = "Mac";
laptop1["brand"] = "Mac 1";
console.log(laptop1);

//Yeni bilgi eklemek

laptop1.version = "10.15.7";

console.log(laptop1);

//Anahtar bilgilerine ulasmak (keys) ->> Object.keys(item)

keys = Object.keys(laptop1);

console.log(keys);

console.log(Object.keys(laptop1));

keys.forEach((item) => {
  console.log(item);
  console.log(laptop1[item]);
});

//Değer bilgilerine ulaşmak Object.values(item)

values = Object.values(laptop1);

console.log(values);

console.log(Object.values(laptop1));

values.forEach((item) => {
  console.log("value",item);

});
