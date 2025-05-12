// Variables:
let decisionDelUsuario;
let valorARS;
const precioUSD = 1300;
let arrayUSD = [];

// Funciones:
function convertCurrency(valorARS) { // Convertir de ARS a USD
    if (valorARS > 0) {
        return valorARS / precioUSD;
    }
    return 0; // Retorna 0 si el valor es inválido
}

// Bucle:
do { // Ejecuta el código al menos una vez.
    decisionDelUsuario = parseInt(prompt('1) Divisa (ARS -> USD) \n2) Salir.'));
    
    if (decisionDelUsuario === 1) { // Si la decisión del usuario es 1, ingresa a la calculadora.
        valorARS = parseFloat(prompt('Ingrese el monto en ARS que desea convertir a USD.'));
        
        if (!isNaN(valorARS) && valorARS > 0) { // Validación para que el precio sea válido
            const valorUSD = convertCurrency(valorARS).toFixed(2);
            alert(`El monto en USD es: ${valorUSD} USD.\nEl valor del dólar actualmente es de: ${precioUSD}`);
            
            arrayUSD.push({
                tipo: "divisa",
                entrada: valorARS,
                salida: valorUSD,
                fecha: new Date().toLocaleString()
            });
        } else {
            alert('El monto ingresado no es válido. Por favor, ingrese un número mayor a 0.');
        }
    } else if (decisionDelUsuario !== 2) {
        alert('Opción inválida. Por favor, seleccione una opción válida.');
    }
} while (decisionDelUsuario !== 2);

alert('Gracias por usar la calculadora de divisas.');
console.log(arrayUSD);
