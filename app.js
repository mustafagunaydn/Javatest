// let gun = String(prompt("Gün giriniz"));
// if (gun=="Pazartesi") {
//   console.log("Haftanın 1. günü");
// } else if (gun=="Salı") {
//   console.log("Haftanın 2. günü");
// } else if (gun=="Çarşamba") {
//   console.log("Haftanın 3. günü");
// } else if (gun=="Perşembe") {
//   console.log("Haftanın 4. günü");
// } else if (gun=="Cuma") {
//   console.log("Haftanın 5. günü");
// } else if (gun=="Cumartesi") {
//   console.log("Haftanın 6. günü");
// } else if ( gun=="Pazar") {
//   console.log("Haftanın 7.günü");
// } else {
//   console.log("geçersiz değer girdiniz");
// }


let Kilo=Number(prompt("Kilonuzu giriniz"))
let Boy=Number(prompt("Boyunuzu giriniz"))
let endex=Kilo/Boy**2
if (0<endex && endex<18.5) {
   console.log("Zayıf"); 
}

else if (18.5<=endex && endex<=24.9) {
    console.log("normal");
}
else if (25<=endex && endex<=29.9 ) {
    console.log("Kilolu");
}
else if (30<=endex) {
    console.log("obez");
}


else {
    console.log("Geçersiz değer girdiniz");
}
