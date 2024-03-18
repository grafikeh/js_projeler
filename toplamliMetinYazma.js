/*   1+2+4+7+11+16+20+23+25+26+28+31+35=229 işleminin sonucunu bulan js kodunu yazınız.
//sayılar 1 artmış, 2 artmış, 3 artmış, 4 artmış, 5 artmış, 4 artmış, 3 artmış, 2 artmış, 1 artmış, 2 artmış, 3 artmış, 4 artmış
--------------------------------------------------------------------------------------------------------------------------------*/
let artisMiktari = 0;
let artiyorMu = true;
let toplam = 0;
let gosterilecekMetin = "";

for (let i = 1; i <= 35; i = i + artisMiktari) {
  if (i != 35) {
    toplam = toplam + i;
    gosterilecekMetin = gosterilecekMetin + i + " + ";
  } else {
    toplam = toplam + i;
    gosterilecekMetin = gosterilecekMetin + i + " = " + toplam;
  }

  if (artisMiktari <= 4 && artiyorMu == true) {
    artisMiktari++;
    if (artisMiktari == 5) {
      artiyorMu = false;
      continue;
    }
  } else {
    artisMiktari--;
    if (artisMiktari == 1) {
      artiyorMu = true;
      continue;
    }
  }
}
console.log(gosterilecekMetin);
