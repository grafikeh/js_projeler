/*Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız.
------------------------------------------------------------------------*/
let sayi = parseInt(prompt("Faktöriyeli hesaplanacak bir sayı giriniz", "10"));
let faktoriyel = 1;
for(let i=1; i<=sayi; i++){
    faktoriyel = faktoriyel * i;
}
console.log(`Girdiğiniz ${sayi} sayisinin faktöriyeli: ${faktoriyel}`);
