/*Bir değişken oluşturun ve değişkene saniye değerini tutun.
SOnra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın
Örnek 1200 değeri için 20 dakika 0 saniye yazılmalıdır */
-------------------------------------------------------------------------
let saniyeString = prompt("Saniye değerini giriniz", "100");
let saniye = parseInt(saniyeString); //saniye = saniyeStringe verilen değeri otomatikman integera dönüştürülmüş hali

let dakika = parseInt(saniye/60);
let kalanSaniye = saniye % 60;

console.log(typeof saniye);
console.log(`Girdiğiniz ${saniye} değeri : ${dakika} dakika ve ${kalanSaniye} saniyedir.`);
