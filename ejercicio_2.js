const prompt = require ('prompt-sync')();

var n1, n2, vsuma;
    n1 = parseInt(prompt('Ingrese el primer numero: '));
    n2 = parseInt(prompt('Ingrese el segundo numero: '));

    vsuma = n1 + n2;
    console.log('La suma es '+ vsuma);