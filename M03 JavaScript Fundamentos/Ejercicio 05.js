/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
  if(num<0){
   return "Es negativo";
  }else if(num>0){
   return "Es positivo";
  }
  return false;
}
var resultado_14=esPositivo(5);
console.log(resultado_14);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + "!";
}
var resultado_15=agregarSimboloExclamacion("hola");
console.log(resultado_15);

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código: 
   return nombre +" "+ apellido;
}
var resultado_16=combinarNombres("juan", "galvis");
console.log(resultado_16);

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola"+" "+nombre+"!";
}
var resultado_17=obtenerSaludo("Martin");
console.log(resultado_17)

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return alto*ancho;
}
var resultado_18=obtenerAreaRectangulo(4,5);
console.log(resultado_18)


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return lado+lado+lado+lado;
}
var resultado_19=retornarPerimetro(2);
console.log(resultado_19);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return (base*altura)/2;
}
var resultado_20=areaDelTriangulo(2,3);
console.log(resultado_20);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
return euro*1.20;

}
var resultado_21=deEuroAdolar(20);
console.log(resultado_21);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
if(letra.length>1){

   return "Dato incorrecto";
}else if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){

return "Es vocal";
}return "Dato incorrecto";

}

var resultado_21=esVocal("BB");
console.log(resultado_21);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
