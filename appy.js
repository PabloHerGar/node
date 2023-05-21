//const { options, demandOption } = require('yargs')
const { crearArchivo } = require('./helpers/multiplicary') // Creamos una constante en la que requerimos el archivo multiplicar con su ruta y hacemos la desestruturacion de objetos para quedarnos con la funcion crearArchivo
const argv = require('./config/yargs') // se importan los valores de argv que estan en el archivo yargs.js
const colors = require('colors') // coge la extension colors

console.clear()

//console.log(process.argv) saca las rutas de node y del archivo.
console.log(argv)

console.log('base: yargs', argv.base)

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err))

//.rainbow sale por pantalla en arcoiris
