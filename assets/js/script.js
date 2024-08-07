// atributos y acciones de instancias
//cada objeto tiene valores diferentes

// como escribir clases, crear objetos que no son literales y escribirlos de otra forma

//Se escribe con camel case mayuscula
class Persona {
    // encargada de crear el objeto es el constructor
    constructor(rut, nombre, edad){
        // solo lo estoy definiendo, esto es como una variable a la que nombre pero no tiene valor, aun no esta inicializado, pero al igualarlo con = si, le doy un valor que luego se pasan como parametros al constructor
        this._rut = rut;
        this._nombre = nombre;
        this._edad  = edad;

    }

    caminar () {
        console.log("caminando")
    }
}

// todo lo que defino en la clase
// ahora despues de esto, puedo crear un objeto, instanciarlo, inicializarlo, con new se instancia, estamos creando intancias y puedo crear las que yo quiera, incluso con el mismo nombre y rut
let persona1 = new Persona("1111111-1", "Pepito", "666");
let persona2 = new Persona("1111111-1", "Pepito", "666");
let persona3 = new Persona("1111111-1", "Pepito", "666");
console.log(persona1, persona2, persona3)
persona1.caminar()