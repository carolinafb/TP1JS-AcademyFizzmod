/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
/* ------------------------------------------------------------- */
/*                           OPCION 1                            */
/* ------------------------------------------------------------- */

function contarVocales(texto) {
  if (typeof texto == "string") {
    var cantVocales = 0;
    textoMayusculas = texto.toUpperCase();
    for (var vocal of textoMayusculas) {
      if (
        vocal == "A" ||
        vocal == "E" ||
        vocal == "I" ||
        vocal == "O" ||
        vocal == "U"
      ) {
        cantVocales++;
      }
    }

    return cantVocales;
  }
  return -1;
}

/* ------------------------------------------------------------- */
/*                           OPCION 2                            */
/* ------------------------------------------------------------- */
/*
function contarVocales(texto) {
  return typeof texto == "string"
    ? texto
        .toLowerCase()
        .split("")
        .filter((c) => "aeiou".includes(c)).length
    : -1;
}*/

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/carolinafb/TP1JS-AcademyFizzmod.git";
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = (texto) => {
  class MiClase {
    static contadorInstancias;

    constructor(texto) {
      this.texto = texto;
      if (!MiClase.contadorInstancias) MiClase.contadorInstancias = 0;
      MiClase.contadorInstancias++;
    }
    contadorPalabras() {
      if (typeof this.texto != "string") return -1;
      return this.texto.length != 0 ? this.texto.split(" ").length : 0;
    }
    hayNumeros() {
      if (typeof this.texto != "string") return -1;
      return this.texto.search(/\d/gm) != -1;
    }
  }

  return MiClase;
};

module.exports = {
  contarVocales,
  urlRepo,
  crearClase,
};
