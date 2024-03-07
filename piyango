/*
Math.random() ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil -1 hariç bir değer üretir. Mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınırıyla çaarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 aralığında bir sayı için (Math.random ()*10)+1 size 1 ile 10 arasındaki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir. Bunu tam sayıya dönüştürmek için Math.floor() kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli. Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.

eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 TL;
eğer kullanıcı sayının basamaklaarını bilirse, yani 65 yerine 56 yazmışsa 5000 tl
eğer kullanıcı şanslı nmaranın sadece bir basamağını bilirse 1000 tl kazanır
*/
----------------------------------------------------------------------------------------------------------------------------------------------------------
let uretilenSayi = Math.random() * 90 + 10; // +10 eğer üretilen sayı sıfır olursa en az 10 yazsın diye, bir de iki basamaklı olmasını istiyoruz anlamına gelir.
//*90 olmasının sebebi, 100 le çarparsak 110 gibibir sayı üretilir.
console.log("Üretilen ondalıklı sayı: " + uretilenSayi);

uretilenSayi = Math.floor(uretilenSayi); //tam sayıya çevir
let kullanicininGirdigiSayi = parseInt(
  prompt("İki basamaklı bir sayı giriniz", "10")
); //parseInt: tam sayıya dönüştürme

let uretilenSayininBirlerBasamagi = uretilenSayi % 10;
let uretilenSayininOnlarBasamagi = Math.floor(uretilenSayi / 10);
console.log(`Üretilen sayının birler basamağı: ${uretilenSayininBirlerBasamagi} 
onlar basamağı: ${uretilenSayininOnlarBasamagi}`);

let userSayininBirlerBasamagi = kullanicininGirdigiSayi % 10;
let userSayininOnlarBasamagi = Math.floor(kullanicininGirdigiSayi / 10);
console.log(`Kullanıcı sayısının birler basamağı: ${userSayininBirlerBasamagi} 
onlar basamağı: ${userSayininOnlarBasamagi}`);

console.log(`Sistemin ürettiği sayı: ${uretilenSayi} 
kullanıcının girdiği sayı: ${kullanicininGirdigiSayi}`);

if (uretilenSayi === kullanicininGirdigiSayi) {
  console.log(
    "Tebrikler, 10.000 TL kazandınız. Tahmininiz: " +
      kullanicininGirdigiSayi +
      " Üretilen sayi:" +
      uretilenSayi
  );
} else if (
  uretilenSayininBirlerBasamagi === userSayininOnlarBasamagi &&
  uretilenSayininOnlarBasamagi === userSayininBirlerBasamagi
) {
  console.log(
    "Tebrikler, 1.000 TL kazandınız. Tahmininiz: " +
      kullanicininGirdigiSayi +
      " Üretilen sayi:" +
      uretilenSayi
  );
} else if (
  uretilenSayininBirlerBasamagi === userSayininBirlerBasamagi ||
  uretilenSayininOnlarBasamagi === userSayininOnlarBasamagi
) {
  //84, 83   79, 49
  console.log(
    "Tebrikler, 5.000 TL kazandınız. Tahmininiz: " +
      kullanicininGirdigiSayi +
      " Üretilen sayi:" +
      uretilenSayi
  );
} else {
  console.log(
    " **** Malesef kazanamadınız. Tahmininiz: " +
      kullanicininGirdigiSayi +
      ", Üretilen sayi: " +
      uretilenSayi +
      " ****"
  );
}
