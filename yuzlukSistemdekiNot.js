/* 100 lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.
-------------------------------------------------------------------------------*/
let yuzlukSistemdekiNot = parseInt(prompt("Notunuzu giriniz.","50"));
let notSiniri = parseInt(yuzlukSistemdekiNot/10);

console.log("Yuzluk sistemdeki not: "+yuzlukSistemdekiNot + " sınır: " +notSiniri);

if(yuzlukSistemdekiNot == 100){
    notSiniri = 9;
}

switch(notSiniri){
    case 9: console.log("Notunuz: AA"); break;
    case 8: console.log("Notunuz: BA"); break;
    case 7: console.log("Notunuz: BB"); break;
    case 6: console.log("Notunuz: CB"); break;
    case 5: console.log("Notunuz: CC"); break;
    default: console.log("Notunuz CC'den düşük");
}
