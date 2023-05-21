const fs = require('fs')

const crearArchivo = async (base = 5) => {
  try {
    //si este codigo funciona se ejecuta y sino catch

    console.log('====================')
    console.log('   Tabla del : ', base) // esto se puede poner así porque es un argumento de la funcion
    console.log('====================')

    let salida = ''

    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${i * base}\n`
    }

    // if (listar) {

    console.log(salida)
    // }
    // paquete importante fyle system

    // fs.writeFile(`tabla-${base}.txt`, salida, err => {
    //   if (err) throw err
    //   console.log(`tabla-${base}.txt creado`)
    // })

    //Esto crea un archivo de texto de la tabla del numero que quiera tener. Si hay un error se para la ejecucion

    //fs.writeFileSync

    fs.writeFileSync(`tabla-${base}.txt`, salida)
    return `tabla-${base}.txt creado`

    //Si todo va bien no hace falta poner el error
  } catch (err) {
    throw err
  }

  //si hay un error devuelve el error
}

module.exports = { crearArchivo }

//UNA  FORMA DE HACER UNA PROMESA

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     //se crea esta linea con la promesa y se cambia el console log del txt creado por el resolve.
//     console.log('====================')
//     console.log('   Tabla del : ', base)
//     console.log('====================')

//     let salida = ''

//     for (let i = 1; i <= 10; i++) {
//       salida += `${i} x ${base} = ${i * base}\n`
//     }
//     console.log(salida)

//     fs.writeFileSync(`tabla-${base}.txt`, salida)
//     resolve(`tabla-${base}.txt creado`)
//     //  Tendriamos que atrapar el error mediante un try y un catch
//   })
// }

// module.exports = {
//   crearArchivo
// } // Se importa este modulo para que se pueda llamar a la funcion que tenemos en el archivo app.js
