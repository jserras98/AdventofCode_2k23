const fs = require('fs');

// Ruta del archivo
const filePath = './puzzle1.txt'; // Reemplaza con la ruta de tu archivo

// Lee el archivo de texto
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const stringsArray = data.split('\n');
  let sumaTotal = 0;

  stringsArray.forEach(element => {
        const numeroEncontrado = element.match(/\d/g); // Array de digitos del string
        const primerNumero = parseInt(numeroEncontrado[0]);
        const ultimoNumero = parseInt(numeroEncontrado[numeroEncontrado.length - 1]);
        
        const numerosConcatenados = `${primerNumero}${ultimoNumero}`;
        const sumaConcatenada = parseInt(numerosConcatenados);
        sumaTotal += sumaConcatenada;
     
});
    console.log('Suma total de los números concatenados:', sumaTotal);
});




