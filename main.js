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
let arrayUSD = [{
    tipo: "divisa",
    entrada : valorARS,
    salida : valorUSD,
    fecha: new Date().toLocaleString()
}];

decisionDelUsuario = parseInt(decisionDelUsuario); //Convertir a número entero

//Funciones:
function convertCurrency(valorARS){ //Convertir de ARS a USD
    if(valorARS > 0 ){ 
        return valorARS / precioUSD; 
    }
    valorUSD = convertCurrency(valorARS);
}

//Bucle:
do{ //Ejecuta el codigo al menos una vez.
    decisionDelUsuario = parseInt(prompt('1) Divisa (ARS -> USD) 2) Salir.'));
    if(decisionDelUsuario == 1){ //Si la decision del usuario es 1, Ingresa a la calculadora.
        valorARS = parseFloat(prompt("Ingrese el monto en ARS que desea convertir a USD."));
        if(valorARS > 0 ){ // Validacion para que el precio nunca sea negativo
            alert("El monto en USD es: " + convertCurrency(valorARS).toFixed(2) + " USD.");
            arrayUSD.push({
                tipo: "divisa",
                entrada: valorARS,
                salida: convertCurrency(valorARS).toFixed(2),
                fecha: new Date().toLocaleString()
            });
        }else{
            alert("El monto ingresado no es válido.");
        }
    }else{
        alert("Invalido");
    }
}while( decisionDelUsuario != 2){
    alert("Gracias por usar la calculadora de divisas.");
}

console.log(arrayUSD)
