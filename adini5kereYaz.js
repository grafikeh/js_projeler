//Kendi adınızı ekrana 5 kere yazdıran uygulamayı tüm döngülerle yazın.
//---------------------------------------------------------------------
//for
for(i=0; i<5; i++){
    console.log(i+1 + "-Salih ARAN (for ile)");
}

//while
let sayac1 = 0;
while(sayac1<5){
    console.log(sayac1+1 + "-Salih ARAN (while ile)");
    sayac1++;//bu kısmı yazmazsak sonsuz döngüye girer
}

//do while
let sayac2 = 0;
do{
    console.log(sayac2+1 + "-Salih ARAN (do while ile)");
    sayac2++;
}while(sayac2<5);
