/*Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazınız.
-------------------------------------------------------------------------*/
let birinciKenar = parseInt(prompt("Birinci kenarı giriniz", "1"));
let ikinciKenar = parseInt(prompt("İkinci kenarı giriniz", "1"));
let ucuncuKenar = parseInt(prompt("Üçüncü kenarı giriniz", "1"));

if (birinciKenar == ikinciKenar && birinciKenar == ucuncuKenar) {
  alert(
    `Girilen kenarlar: ${birinciKenar} - ${ikinciKenar} - ${ucuncuKenar} Üçgen çeşidi: "Eşitkenar Üçgen"`
  );
} else if (birinciKenar == ikinciKenar || birinciKenar == ucuncuKenar || ikinciKenar == ucuncuKenar) {
  alert(
    `Girilen kenarlar: ${birinciKenar} - ${ikinciKenar} - ${ucuncuKenar} Üçgen çeşidi: "İkizkenar Üçgen"`
  );
}else{
    alert(
        `Girilen kenarlar: ${birinciKenar} - ${ikinciKenar} - ${ucuncuKenar} Üçgen çeşidi: "Çeşitkenar Üçgen"`
      );
}
//eşit değil mi diye sorgulayarak da bakılabilir
/*
else if(birinciKenar != ikinciKenar && birinciKenar != ucuncuKenar && ikinciKenar != ucuncuKenar){
    alert("Çeşitkenar");
}else{
    alert("ikizkenar");
}*/
