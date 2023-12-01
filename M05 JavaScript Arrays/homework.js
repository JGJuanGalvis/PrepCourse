/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
return array[0];

}
var resultado_37=devolverPrimerElemento([123,'ver','comida']);
console.log(resultado_37);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[array.length-1];
  
   }

var resultado_38=devolverUltimoElemento([123,'ver','comida','holaaa']);
console.log(resultado_38);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
var resultado_39=obtenerLargoDelArray([123,'ver','comida','holaaa']);
console.log(resultado_39);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

var x=array.map(function(elemento){
return elemento+1;
});
return x;

/*
var x=[];

for (var i=0; i<array.length;i++){

   x[i]=array[i]+1;
}
return x;
*/

}

var resultado_40=incrementarPorUno([1,2,3]);
console.log(resultado_40);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;

}
var resultado_41=agregarItemAlFinalDelArray([1,2,3,4],5);
console.log(resultado_41);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;

}
var resultado_42=agregarItemAlComienzoDelArray([1,2,3,4],"hola");
console.log(resultado_42);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   
   var x=palabras.reduce(function(acc,elemento){
      
      return acc+" "+elemento;
   });

   return x;

}
var resultado_43=dePalabrasAFrase(['Hello', 'world!']);
console.log(resultado_43);


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   /*var y= false;
   array.forEach(function(elem) {
      console.log(elem)
       if(elem===elemento) {
         y=true;
       }
       
   });
  */
  var y=array.includes(elemento);
  return y;

}

 var resultado_44=arrayContiene([1,2,3,4],4)
 console.log(resultado_44);


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
    var suma= arrayOfNums.reduce(function(acc,elemento){
      
      return acc+elemento;


   });

    return suma;

}
var resultado_45=agregarNumeros([4,2,3,4,5])
console.log(resultado_45);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma1=agregarNumeros(resultadosTest);
   var num=resultadosTest.length;
   var promedio=suma1/num;
   
   
   return promedio;
   
}
var resultado_46=promedioResultadosTest([4,2,3,4,5])
console.log(resultado_46);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

  /* var numGrande=arrayOfNums[0];
   arrayOfNums.forEach(function(elem){
       console.log(elem)
       if(elem>numGrande){
         numGrande=elem;
       }
   });
*/
  return Math.max(...arrayOfNums);
 
}


var resultado_47=numeroMasGrande([4,2,38,4,5])
console.log(resultado_47);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
/* var x=multi.reduce(function(acc,elemento){
      return acc*elemento;

   });
*/
   var multi=1;
   
   if(arguments.length===0) {
      return 0;
   }else if (arguments.length===1){
      return arguments[0];


   }else{
    for(let i=0; i < arguments.length; i++){
    multi *=arguments[i];
   }
   return multi;
}
  
}

var resultado_48=multiplicarArgumentos(1)
console.log(resultado_48);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

    /*  
   var contador=0;

      array.forEach(function(elem){
      console.log(elem)
      
      if(elem>18){
         contador++;
         console.log(contador)
      }

   });
    return contador;
    */

     var filtrados=array.filter(function(elem){
     return elem>18;
     
     });

     return filtrados.length;
}
var resultado_49=cuentoElementos([20,3,19,5,30])
console.log(resultado_49);


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if(numeroDeDia>1 && numeroDeDia<7) return "Es dia laboral";
   
   return "Es fin de semana";
}

var resultado_50=diaDeLaSemana(2)
console.log(resultado_50);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
    var numS=num.toString();
    console.log(numS[0]);
   if (numS[0]==="9"){
      return true
   }else return false;

}
var resultado_51=empiezaConNueve(90);
console.log(resultado_51);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   var y=true;
   var b=array[0];
   array.forEach(function(elem) {
      console.log(elem)
      if(b!=elem){
         y=false;
         
      }
      
      /*if(acc===elem){
       y=true;
      }*/
      
   });

   return y;
}

var resultado_52=todosIguales([3,,3,3,3,3,3,3]);
console.log(resultado_52);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   
    var mesArray=[];

    array.forEach(function(elem){
    console.log(elem);

      if(elem==="Enero" || elem==="Marzo" || elem==="Noviembre"){
         console.log(elem);
         mesArray.push(elem);
        
      }

    });
       if(mesArray.includes("Enero","Marzo","Noviembre")){
         return mesArray;
         }
         return "No se encontraron los meses pedidos"

/*
    var mesA =array.filter((array)=> array==="Enero" || array==="Marzo" || array==="Noviembre");
    return mesA;
   */
   }

var resultado_53=mesesDelAño(["febrero","Marzo","abril","Noviembre"]);
console.log(resultado_53);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
   var tabla=[];

   for(i=0;i<=10;i++){
      var operacion=i*6
      tabla.push(operacion);

   }
   return tabla;

}
var resultado_54=tablaDelSeis();
console.log(resultado_54);

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var mesArray=[];

   array.forEach(function(elem){
   console.log(elem);

     if(elem>101 && elem<=200){
        console.log(elem);
        mesArray.push(elem);
        return mesArray;
     }

   });

   return mesArray;

}
var resultado_55=mayorACien([1,100,150,102,5,8,200])
console.log(resultado_55)

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var tabla=[];
   for(i=0;i<10;i++){
   num+=2;
   tabla.push(num);
   
   if(num === i){
      
      break;
   } 
   }
   if(tabla.length<10){
      return "Se interrumpió la ejecución"
    }

return tabla;

}

var resultado_56=breakStatement(5);
console.log(resultado_56);


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var tabla=[];
   for(i=0;i<10;i++){
      if(i===5){

         continue;
      }
   num+=2;
   tabla.push(num);
   
   

}
return tabla;
}

var resultado_57=continueStatement(3);
console.log(resultado_57);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
