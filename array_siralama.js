/*Şehirler diye bir dizi oluşturun. Her dizi elemanı şehirler ile ilgili bilgiler içermelidir.Bu bilgiler şehrin adı, plaka numarası, şehrin komşuları olabilir.
Diziyi oluşturduktan sonra şehir adlarına göre z den a ya sıralayıp ekrana yazdırınız.*/

const sehirler = [
    {sehir: "Ankara", plaka: 6, komsular : ['Çankırı', 'Kırıkkale']},
    {sehir: "Istanbul", plaka: 34, komsular : ['Balıkesir', 'BUrsa']},
    {sehir: "Kastamonu", plaka: 37, komsular : ['Çankırı', 'Zonguldak']},
    {sehir: "Konya", plaka: 42, komsular : ['Ankara', 'Mersin']},
];


sehirler.sort(function (a, b) {
    if (a.sehir < b.sehir) {
      return 1;
    } else if (a.sehir > b.sehir) {
      return -1;
    } else return 0;
  });
console.log(sehirler);
