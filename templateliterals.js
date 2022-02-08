let username = "hakan";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

console.log(
  "Merhaba ",
  username,
  "Sitemize Hoşgeldin",
  "Mail Adresin : ",
  email
);

let info = `
Merhaba ${username} 
sitemize hoşgeldin..
mail adresin ${email}
kısa isminiz ${username[0]}.
mail adresinin uzunluğu ${email.length}
borcunuz ${(2 + 3) * 10} TL
günün saat bilgisi ${new Date().getHours()}
`;

console.log(info);
