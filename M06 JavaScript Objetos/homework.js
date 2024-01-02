/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var Gato= {
      nombre:nombre,
      edad:edad,
      meow : function(){
         return "Meow!";
      }


   };
   
   return Gato;
}
var resultado_58=crearGato("juan",12);
console.log(resultado_58["edad"])//BRACKET NOTATION
console.log(resultado_58.edad)//DOT NOTATION
console.log(resultado_58.meow())//PARA LLAMAR FUNCTION DE UN OBJETO

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var Usuario= {
      nombre:nombre,
      email:email,
      password:password
   };
   return Usuario;
} 
var resultado_59=nuevoUsuario("Juan","juan@gmail.com","hola123");
console.log(resultado_59);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:

   objeto[propiedad]=null;
   return objeto;
}
var obj={
   name:"Juan"
}

var resultado_60=agregarPropiedad(obj,"edad");
console.log(resultado_60);

function invocarMetodo(objeto, metodo) {
   // metodo --> "saludar"
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
  
   objeto[metodo]();
   
}

var obj ={
   name:"juan",
   saludar:function(){ 
      return "hola"
   }
}

var resultado_61=invocarMetodo(obj, "saludar");
console.log(resultado_61);


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso*5;
}

var objetoMisterioso={
numeroMisterioso:5
}

var resultado_62=multiplicarNumeroDesconocidoPorCinco(objetoMisterioso);
console.log(resultado_62);

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

  delete objeto[propiedad];
  return objeto;
}
var obj1={
propiedad:"hola"

}

var resultado_63=eliminarPropiedad(obj1,"propiedad");
console.log(resultado_63);

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (!objetoUsuario["email"]){
      return false;
   }else return true;
}

var obj2={
email:undefined
}

var resultado_64=tieneEmail(obj2);
console.log(resultado_64);

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   /*if(objeto.propiedad){
      return true;

   }else return false;*/

   return objeto.hasOwnProperty(propiedad); //hasOwnProperty :sirve para validar si existe una propiedad x en el objeto retornando un valor boolean 
}
var obj3={
   propiedad:"hola"
}
var resultado_65=tienePropiedad(obj3,"propiedad")
console.log(resultado_65);

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if ( objetoUsuario.password===password){
      return true;
   }else return false;
}
var obj4={
password:"hola123"
}
var resultado_66=verificarPassword(obj4,"hola123")
console.log(resultado_66);

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:

objetoUsuario.password=nuevaPassword;
return objetoUsuario;

}
var obj5={
   password:"hola123"
}
var resultado_67=actualizarPassword(obj5,"juan123");
console.log(resultado_67);

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;


}

var obj6={

amigos:["juan","maria"]
}

var resultado_68=agregarAmigo(obj6,"santi")
console.log(resultado_68);



function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

    var premium=objetoMuchosUsuarios.map((usuario) => {
      usuario.esPremium = true; return usuario
   }); return  premium;
      
   }
   
   

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
    return objetoUsuario.posts.reduce ((acomulador , post) =>{ 
      return acomulador + post.likes },0)
   
  }

var obj8={
posts:[
   {nombre:"juan",likes:2 },
   {nombre:"juan",likes:3 },
   {nombre:"juan",likes:2 },
   {nombre:"juan",likes:3 },
   ]
}

var resultado_70=sumarLikesDeUsuario(obj8);
console.log(resultado_70);

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto["calcularPrecioDescuento"] =function(){

      this.precioFinal=this.precio -(this.precio*this.porcentajeDeDescuento);
      return this.precioFinal;
   }; return objetoProducto;
  
   
}

var obj9={
   precio:40000,
   porcentajeDeDescuento:0.2
}

var resultado_71=agregarMetodoCalculoDescuento(obj9);
console.log(resultado_71);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
