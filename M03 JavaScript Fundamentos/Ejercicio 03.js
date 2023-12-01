/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x===y;
}
var resultado_1=sonIguales("8",8);
console.log(resultado_1);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   return str1.length==str2.length;
}
var resultado_2=tienenMismaLongitud("hola","1234");
console.log(resultado_2);

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   return num < 90;
}
var resultado_3=menosQueNoventa(80);
console.log(resultado_3);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num>50;
}
var resultado_4=mayorQueCincuenta(66);
console.log(resultado_4);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num%2==0){

      return true;
   }else{
      return false;
   }
}
var resultado_5=esPar(6);
console.log(resultado_5);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num%2==1){

      return true;
   }else{
      return false;
   }

}
var resultado_6=esImpar(7);
console.log(resultado_6);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
