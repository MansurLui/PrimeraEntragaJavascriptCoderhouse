alert("** BIENVENIDO A MI CALCULADORA DE PRESTAMOS **")
let nombre = prompt("Ingrese su nombre")
let dineroIngresado = parseInt(prompt("Inrgesa el monto de dinero que necesitas"))
let cuotas = parseInt(prompt("ingresá la cantidad de cuotas para devolver el préstamo (puede ser en 6, 12, 18 o 24 cuotas)"))


const seiscuotas = dineroIngresado*1.3
const docecuotas = dineroIngresado*1.75
const dieciochocuotas = dineroIngresado*2
const veinticuartrocuotas = dineroIngresado*2.6
const en6 = seiscuotas/6
const en12 = docecuotas/12
const en18 = dieciochocuotas/18
const en24 = veinticuartrocuotas/24


function calculadoraPrestamo() {
        switch (cuotas){
            case 6:
                alert("Pagarias 6 cuotas de $" + en6 + " sumando un total: $" + seiscuotas )
                break;
            case 12:
                alert("Pagarias 6 cuotas de $" + en12 + " sumando un total: $" + docecuotas )
                break;
            case 18:
                alert("Pagarias 6 cuotas de $" + en18 + " sumando un total: $" + dieciochocuotas )
                break;
            case 24:
                alert("Pagarias 6 cuotas de $" + en24 + " sumando un total: $" + veinticuartrocuotas )
                break;
        }
    if (cuotas !=6 && cuotas !=12 && cuotas != 18 && cuotas !=24){
        alert("Las cuotas disponibles que tenemos disponibles son en 6, 12, 18 o 24")
        alert("Recarga la pagina para volver a empezar.")
    }
}

calculadoraPrestamo()

alert("Gracias " + nombre +" por utlizar mi calculadora de prestamos")