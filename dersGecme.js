//Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazın. 
//(Geçme notu: 50 , vizenin %40 ı, finalin %60 ı geçerlidir.)

let vizeNotu = parseInt(prompt("Vize notunu giriniz:", "1"));
let finalNotu = parseInt(prompt("Final notunu giriniz:", "1"));
let ortalama = vizeNotu*0.4 + finalNotu *0.6;

if(ortalama <50){
    alert(`Ortalamanız: ${ortalama}, "Dersten kaldınız."`);
}else{
    alert(`Ortalamanız: ${ortalama}, "Dersi geçtiniz."`);
}
