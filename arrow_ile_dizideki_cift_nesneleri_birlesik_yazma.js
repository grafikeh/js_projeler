//SORU 3
/*
Öğrencileri tutan bir dizi oluşturun. Her bir öğrenci nesnesinde  ad, soyad ve id değerleri olmalı. id numarası çift olan öğrencilerin adı ve soyadını birleştirilmiş halde tutan diziyi a dan z ye sıralı şekilde ekrana yazdırınız.
Bunları yaparken map filter sort metodlarını kullanın. işlem bittikten sonra kodları arrow function ve zincirleme haline dönüştürün.
*/

const ogrenciDizisi = [
  { ad: "salih", soyad: "aran", id: 2 },
  { ad: "busra", soyad: "aran", id: 3 },
  { ad: "hasan said", soyad: "aran", id: 6 },
  { ad: "yusuf selman", soyad: "aran", id: 8 },
  { ad: "elmas", soyad: "karakoc", id: 12 },
  { ad: "ali", soyad: "karakoc", id: 5 },
];

const sonucDizi = ogrenciDizisi
  .filter((ogrenci) => ogrenci.id % 2 === 0)
  .map((ogrenci) => ogrenci.ad + " " + ogrenci.soyad)
  .sort();

console.log(sonucDizi);

//arrow kullanılmamış hali---------------------
/*
const idNumarasiCiftOlanOgrencilerDizisi = ogrenciDizisi.filter(function (
  ogrenci
) {
  return ogrenci.id % 2 === 0;
});
const isimler = idNumarasiCiftOlanOgrencilerDizisi.map(function(ogrenci){
    return ogrenci.ad + " " + ogrenci.soyad;
})
isimler.sort();
console.log(idNumarasiCiftOlanOgrencilerDizisi);
console.log(isimler);
*/
