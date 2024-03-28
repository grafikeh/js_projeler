/*
Kullanıcıdan alınan değere kadar olan sayılar dizisini fibonacci şeklinde yazdırın. fibonacci örnek, 0 1 1 2 3 5 8 13 21...
İki sayının toplamı bir sonraki sayıyı oluşturuyor.
*/

function fibonacci(sayi) {
  let sonucDizi = [0, 1];
  for (let i = 2; i < sayi; i++) {
    const oanHesaplananEleman = sonucDizi[i - 1] + sonucDizi[i - 2];
    if (oanHesaplananEleman < sayi) {
      sonucDizi[i] = oanHesaplananEleman;
    }else{
        break;
    }
  }
  return sonucDizi;
}
console.log(fibonacci(500)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
