/*Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0'a bastığında girdiği sayıların çarpımını sonuç olarak gösteren programı yazınız.
-------------------------------------------------------------*/
let girilenSayi = parseInt(prompt("Bir sayı giriniz"));
let carpimSonucu = 1;

while(girilenSayi != 0){
    carpimSonucu = carpimSonucu * girilenSayi;
    girilenSayi = parseInt(prompt("Bir sayi giriniz"));
}
console.log("Çarpım sonucu: " +carpimSonucu);
