/*Sıcak soğuk oyunu yapalım. Sistem 100 e kadar bir sayı üetsin. Kullanıcı bu sayıyı tahmin etmeye çalışsın. Kullanıcının girdiği değere göre kullanıcıyı "artır" ya da "azalt" diyerek uyaralım. 
Kullanıcı sayıyı bulana kadar devam edelim ve sayıyı bulduğunda kaç denemeden sonra bulduğunu belrtelim.
------------------------------------------------------------------------------------------------------------
let uretilenSayi = parseInt(Math.random()*101);
/* 101 ile çarpmamızın sebebi Math.random 0 ile 0,999 arası bir sayı veriyor. ya 100 ile çarpıp 1 ekleyecez, ya da direk 101 ile çarpacaz.
0,999*100 desek 99,9 olurdu. o yüzden 101 ile çarpacaz */

//console.log("Üretilen sayı: " +uretilenSayi);

let tahmin = -1; //kullanıcın girmeyeceği bir sayı girdim, pozitif bir sayı girseydim, sistem aynı sayıyı üretseydi while çalışmayacaktı.
let tahminSayisi = 0;

while(tahmin != uretilenSayi){//tahmin üretilen sayıya eşit olmadığında aşağıdaki kodu çalıştır dedik.
    tahmin = parseInt(prompt("Bir sayı giriniz."));
    tahminSayisi++;
    if(tahmin == uretilenSayi){
        console.log("Tebrikler," + tahminSayisi + " seferde bildiniz.");
    }else if(tahmin<uretilenSayi){
        console.log("Biraz daha çık");
    }else{
        console.log("Biraz daha in");
    }
}
