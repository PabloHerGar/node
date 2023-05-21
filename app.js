const { crearArchivo } = require('./helpers/multiplicar') // Creamos una constante en la que requerimos el archivo multiplicar con su ruta y hacemos la desestruturacion de objetos para quedarnos con la funcion crearArchivo
console.clear()
console.log(process.argv)
// Saldrá en consola primera linea(path donde esta instalado node), segunda linea(path del archivo). En la terminal escribimos node app --base=9 sería tercer elemento

const [, , arg3 = 'base=9'] = process.argv //asigno un valor a la base
const [, base] = arg3.split('=')

console.log(base) // sacamos por pantalla la base en vez de el arg3

//const base = 5 Se comenta porque ya extraemos la base en el anterior const

crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))

  // .then asociado al exito si todo va bien se imprime el nombre del archivo creado.

  .catch(err => console.log(err))
//.catch asociado al error, si hay error se imprime el error
