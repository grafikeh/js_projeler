/*Bir değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklığı saklayın.
Sonrasında bu değerin kaç Celcius olduğunu hesaplayın.
100 değeri için 37.777778 gibi bir değer elde edilmektedir.
Hesaplama formülü : celcius = 5/9*(fahrenheit -32) */
--------------------------------------------------------------------------------
let girilenDerece = parseInt(prompt("Fahrenheit giriniz", "100"));
let celciusDerece = (5/9) * (girilenDerece - 32);
console.log("Girdiğiniz " + girilenDerece + " fahrenheit sıcaklık " + celciusDerece.toFixed(2) + " derecedir."); //toFixed(2) demek virgülden sonra 2 basamak yaz demek
