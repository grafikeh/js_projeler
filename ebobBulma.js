//Kullanıcıdan aldığınız iki tamsayı değerin en büyük ortak bölenini uygulamayı yazınız. Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır.
//----------------------------------------------------------------------------------------------------------------------------------
let sayi1 = parseInt(prompt("Birinci sayıyı giriniz"));
let sayi2 = parseInt(prompt("İkinci sayıyı giriniz"));

let ebob=1, kontrol=2;

while(kontrol <= sayi1 && kontrol <= sayi2){
    if(sayi1 % kontrol == 0 && sayi2 % kontrol == 0){
        ebob=kontrol;
    }
    kontrol++;
}
if(ebob ==1){
    console.log("Bu sayılar aralarında asaldır");
}else{
    console.log("Bu sayıların ortak böleni: " + ebob);
}
