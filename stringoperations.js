let email = "oguzhanbellii@gmail.com";
let firstName = "Oğuzhan";
let lastName = "Belli";

//string karakter sayısı

console.log(email);

// Ilk karakteri bulmak

console.log(firstName[0]);
console.log(firstName.charAt(0));

//Buyuk Harf / Kucuk Harf

firstName = firstName.toUpperCase();

console.log(firstName);

firstName = firstName.toLowerCase();

console.log(firstName);

//String icinde istediğimiz bilgiyi aramak ve yerini bulmak --> search

console.log(email.search("@"));

console.log(email[13]);

email.search("olmayan"); // -1 getirir.

//belli bir yere kadar olanı almak --> slice (domain bilgisi)

console.log(email.slice(13));

let DOMAIN = email.slice(email.search("@") + 1);

console.log(DOMAIN);
console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")));

//BİLGİYİ DEĞİŞTİR

email = email.replace("gmail.com", "kodluyoruz.org");

console.log(email);

//istediğim bilgi var mı ?

console.log(email.includes("@")); //true
console.log(email.includes("asdsadasd")); //false

// istediğim bilgiyle basladı mı bitti mi ? --> startswith ,endswith

console.log(email.endsWith("@")); //false

console.log(email.endsWith("kodluyoruz.org")); //true

//ilk harflerini büyük yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} 
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`;
console.log(fullName);

// Soru 2 
let url = "www.kodluyoruz.org";

console.log(url.slice(url.search(".k")+1));


console.log(url.indexOf("."));

urldomain = url.slice(3 + 1);
console.log(urldomain);