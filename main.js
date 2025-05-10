// //Prompt Converter
// Desarrollar una aplicación de consola en JavaScript básico compuesta por un único app.js
// enlazado a un index.html con una estructura básica.
// La app debe:
// ● Mostrar un menú interactivo únicamente mediante prompt (se puede usar mensajes informativos con alert).
// ● Permitir divisas (ARS -> USD, con una tasa fija declarada en el script).
// ● Registrar cada operación en un array de objetos llamada “history”.
// ● Al seleccionar Salir, imprimir en la consola el array de objetos.
// Restricción: todas las entradas y salidas al usuario deben gestionarse exclusivamente con “prompt” y “alert”; no se permite HTML adicional ni bibliotecas externas.


//Variables:
let decisionDelUsuario;
let valorARS;
let precioUSD = 1300;
let valorUSD;
let arrayUSD = [];

//Funciones:
function convertCurrency(valorARS){ //Convertir de ARS a USD
    if(valorARS > 0 ){ 
        return valorARS / precioUSD; 
    }
    return 0;
}

//Bucle:
do{ //Ejecuta el codigo al menos una vez.

    decisionDelUsuario = parseInt(prompt('1) Divisa.  (ARS => USD) \n2) Salir.'));

    if(decisionDelUsuario == 1){ 
        //Si la decision del usuario es 1, Ingresa a la calculadora.

        //Prompt para ingresar el monto en ARS a convertir a USD.
        valorARS = parseFloat(prompt("Ingrese el monto en ARS que desea convertir a USD."));

        // Validacion para que el precio nunca sea negativo
        if(valorARS > 0 ){ 
            alert("El monto en USD es: " + convertCurrency(valorARS).toFixed(2) + " USD.");

            // Guardar la operación en el array de objetos
            // Se guarda el tipo de operación, el monto de entrada (ARS), el monto de salida (USD) y la fecha.
            arrayUSD.push({
                tipo: "divisa",
                entrada: valorARS,
                salida: convertCurrency(valorARS).toFixed(2),
                fecha: new Date().toLocaleString()
            });
        }else{
            alert("El monto ingresado no es válido.");
        }
    }
}while( decisionDelUsuario != 2);
alert("Gracias por usar la calculadora de divisas.");

console.log(arrayUSD);
