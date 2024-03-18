//Kullanıcıdan aldığınız integer değere kadar olan tümasal sayıları yazdıran  programı yazınız. 10 için ekranda 2,3,5,7  değerleri olmalıdır.
//-----------------------------------------------------------
let girilenSayi = parseInt(prompt("Bir sayı giriniz","10"));
let gosterilecekMetin = "";
for(let i=2; i<= girilenSayi; i++){
    let asalSayiMi = true;
        for(let j = 2; j<i; j++){
            if (i%j==0){
                asalSayiMi = false;
                break;
            }
        }
        if (asalSayiMi == true){
            gosterilecekMetin = gosterilecekMetin + i +" ";
            
        }
}
console.log(gosterilecekMetin);
