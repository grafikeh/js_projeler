//1'den 10 a kadar olan sayıları sıra ile ve aralarında vigül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız.
//-------------------------------------------------------------------------------------------------------------------------
let yazdirilacakMetin = "";
for(let i=1; i<=10; i++){
    if(i !=10){
        yazdirilacakMetin = yazdirilacakMetin + i + ",";
    }else{
        yazdirilacakMetin = yazdirilacakMetin +i;
    }
}
console.log(yazdirilacakMetin);
