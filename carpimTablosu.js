//Çarpım tablosunu oluşturan bir uygulama yazınız.
//------------------------------------------------
let yazdirilacakMetin = "";
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        yazdirilacakMetin = yazdirilacakMetin + (i +"*"+j+"="+(i*j))+"\t";
    }

    console.log(yazdirilacakMetin);
    yazdirilacakMetin="";//Bunu yazmamızın sebebi, alt satrıra geçerken aynı ifadeleri tekrar tekrar yazmasın diye. Buna sıfırlama denir.
}
