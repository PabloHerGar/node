const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'La base de la tabla de multiplicar'
  }) //  Con este comando se crea b como abreviatura de base y se le asigna tipo number demandOption hace que se se requerido el valor
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Hasta el numero de la tabla de multiplicar'
  })

  .check((argv, options) => {
    if (isNaN(argv.b, argv.h)) {
      throw 'La base tiene que ser un numero'
    } //devuelve el error si la base no es un numero, esto es lo que hace check
    return true
  }).argv // verifica que no haya ningun error de tipo

module.exports = argv //se importa todo argv
