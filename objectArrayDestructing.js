let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

//Obje içindeki bilgilerin tek seferde çıkarılması.

// let userName = settings.userName;

// console.log(userName);

//rename & destructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;

console.log(user, password, isActive, serverIP, serverName);
console.log(settings);

//obje içindeki bazı bilgilerin çıkarılması

let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;
console.log(userName2, password2, isActive2, newSettings);

//eger değişken ismi daha önce tanımlanmadıysa
// //let {
//     userName,
//     password,
//     isActive,
//     ...newSettings
//   } = settings;

//objenin destructing ile kopyalanması
// HATALI KOPYALAMA
// let settings2 = settings;

// settings2.userName = "Değişen Bilgi";

// console.log("Settings:", settings);
// console.log("Settings2", settings2);

//Doğru kopyalama
let settings2 = { ...settings };
settings2.userName = "Değişen Bilgi";

console.log("Settings:", settings);
console.log("Settings2", settings2);

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;

console.log(score1, score2, otherScore);

let copyOfScore = [...score];

console.log(copyOfScore);