//operadores matematicos
let a, b;
let c,d;
let suma, resta, mult, div, residuo, potencia;
a= prompt ('Ingrese un numero ');
b = prompt ('Ingrese otro numero ');

//Resultados de las operaciones
suma = Number(a) + Number(b); // aqui la operacion da un error debido a que se concatena el valor de a y b, ya que son cadenas de texto. Para solucionarlo se debe convertir a y b a numeros.
document.write (" la suma es : " + suma + "<br>");
console.log ("la suma es: ", suma);

resta = Number(a) - Number(b);
document.write (" la resta es : " + resta + "<br>");
console.log ("la resta es: ", resta);

mult = Number(a) * Number(b);
document.write (" la multiplicacion es : " + mult + "<br>");
console.log ("la multiplicacion es: ", mult);


residuo = Number(a) % Number(b);
document.write (" el residuo es : " + residuo + "<br>");
console.log ("el residuo es: ", residuo);

potencia = Number(a) ** Number(b);
document.write (" la potencia es : " + potencia + "<br>");
console.log ("la potencia es: ", potencia);
//Obtener los datos a través del usuario
c = parseInt(prompt(`Ingrese un número`));
d = parseInt(prompt(`Ingrese otro número`));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son: ",
    "Suma: ", suma, `<br>`,
    "Resta: ", resta, `<br>`,
    "Multipliación: ", mult, `<br>`,
    "División: ", div, `<br>`,
    
    "Residuo: ", residuo, `<br>`,
   
    "Potencia: ", potencia, `<br>`
);

console.log("Los resultados de las operaciones son: ",
    "Suma: ", suma,
    "Resta: ", resta, 
    "Multipliación: ", mult, 
    "División: ", div, 
    "Residuo: ", residuo, 
    "Potencia: ", potencia, 
);
