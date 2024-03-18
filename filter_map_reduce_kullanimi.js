//map, filter, reduce, some, find kullanılacak
//for ve while döngüleri kullanılmayacak.
/*----------------------------------*/
//SORULAR
//sayılar dizisindeki tek elemanları bulup başka bir diziye aktarın (filter)
//bu yeni dizinin her bir elemanının karesini alıp başka bir diziye aktarın (map)
//bu dizideki 10 dan büyük elemanların toplamını ekrana yazırın (reduce)
//sayilar dizisini parametre alarak olan tek bir fonksiyon olmalı ve bu foksiyon geriye sonucu döndürmelidir.
/*-----------------------------------*/

//ÇÖZÜM :
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sonucuBul(sayilar) {
  const tekElemanlariIcerenDizi = sayilar.filter(function (sayi) {
    return sayi % 2 !== 0;
  });
  console.log("Tek elemanları içeren dizi: " + tekElemanlariIcerenDizi);//1,3,5,7,9

  const sayilarinKareleri = tekElemanlariIcerenDizi.map(function (sayi) {
    return sayi * sayi;
  });
  console.log("Sayıların kareleri: " + sayilarinKareleri); //1,9,25,49,81
  const toplam = sayilarinKareleri.reduce(function (genelToplam, sayi) {
    if (sayi > 10) {
      return (genelToplam = genelToplam + sayi);
    } else {
      return genelToplam;
    }
  }, 0);

  return toplam;
}

console.log(sonucuBul(sayilar)); // 155

function kisaVersiyon(sayilar) {
  return sayilar
    .filter((sayi) => sayi % 2 !== 0)
    .map((sayi) => sayi * sayi)
    .reduce(
      (genelToplam, sayi) => (sayi > 10 ? (genelToplam += sayi) : genelToplam),
      0
    );
}

kisaVersiyon(sayilar);
console.log(kisaVersiyon(sayilar)); // 155
