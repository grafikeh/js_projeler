/*Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız.
--------------------------------------------------------------------*/
let birinciSayi = parseInt(prompt("Birinci sayiyi giriniz", "1")); //parseInt diyerek çift tırnak içerisindeki kullanıcının girdiği değer metinden sayıya dönüştürülecek
let ikinciSayi = parseInt(prompt("İkinci sayiyi giriniz", "1"));
let ucuncuSayi = parseInt(prompt("Üçüncü sayiyi giriniz", "1"));

let ortalama = (birinciSayi + ikinciSayi + ucuncuSayi) / 3;
alert(`Girdiğiniz ${birinciSayi}, ${ikinciSayi} ve ${ucuncuSayi} sayılarının ortalaması: ${ortalama}`);
