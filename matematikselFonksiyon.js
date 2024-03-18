/*Aşağıda tanımı verilen f(x, y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.

x>0, y<0 ise f(x,y)=4x+2y+4
x>0, y=0 ise f(x,y)=2x-y+3
x>0, y>0 ise f(x,y)=3x+4y+3
----------------------------------------------------------------------------------------------------*/

let xDegeri = parseInt(prompt("x değeri giriniz."));
let yDegeri = parseInt(prompt("y değeri giriniz."));

let islemSonucu = 0;

if (xDegeri > 0 && yDegeri < 0) {
  islemSonucu = 4 * xDegeri + 2 * yDegeri + 4;
} else if (xDegeri > 0 && yDegeri == 0) {
  islemSonucu = 2 * xDegeri - yDegeri + 3;
} else if (xDegeri > 0 && yDegeri > 0) {
  islemSonucu = 3 * xDegeri + 4 * yDegeri + 3;
}
console.log(`x=${xDegeri} y=${yDegeri} Sonuç: ${islemSonucu}`);
