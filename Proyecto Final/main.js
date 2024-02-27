const nombre1 = prompt("Buenas tardes, por favor ingrese su nombre para continuar");
const apellido1 = prompt("Ingrese su apellido");
const edad1 = prompt("Ingrese su edad");
const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; 
let contDias = [0, 0, 0, 0, 0, 0, 0];

const persona1 = new Persona(nombre1, edad1, apellido1);

alert("Buenas tardes " + persona1.nombre + ' ' + persona1.apellido +", esta es una plataforma para que usted pueda calcular su registro semanal de recorrido realizado en una actividad fisica.\nRecuerde que los valores que ingrese deben ser expresado en kilometros.\nPara continuar por favor presione 'aceptar'");

let opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Día que mas Km se recorrio. \n3. Guia de usuario.\n4.Ver datos de usuario.\n5. SALIR.\nPor favor seleccione la opción que deseé para continuar:");
let opcion2;

while (opcion1 != 1 && opcion1 != 2 && opcion1 != 3 && opcion1 != 4 && opcion1 != 5) {
    alert("La opción ingresada es incorrecta, por favor vuelva a ingresar una opción");
    opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Día que mas Km se recorrio. \n3. Guia de usuario.\n4.Ver datos de usuario.\n5. SALIR.\nPor favor seleccione la opción que deseé para continuar:");
}

//----------------------------------------------------Primera parte de elección de opcion1----------------------------------------------------------------------------------------------------------------------------------
while (opcion1 != 5){
    if (opcion1 == 1) {
        opcion2 = prompt("Por favor ingrese el numero dia que quiere realizar la carga de datos recorridos:\n1. Lunes.\n2. Martes.\n3. Miercoles.\n4. Jueves.\n5. Viernes.\n6. Sabado.\n7. Domingo.");
        while (opcion2 < 1 || opcion2 > 7){
            alert("La opción ingresada es incorrecta, por favor vuelva a ingresar una opción");
            opcion2 = prompt("Por favor ingrese el numero dia que quiere realizar la carga de datos recorridos:\n1. Lunes.\n2. Martes.\n3. Miercoles.\n4. Jueves.\n5. Viernes.\n6. Sabado.\n7. Domingo.");
        }
        
    //-----------------------------------------------------Segunda parte de elección de opcion2----------------------------------------------------------------------------------------------------------------------------------
        let valor;
        switch(opcion2){
            case "1":
                valor = cargarDato(0);
                break;
            case "2":
                valor = cargarDato(1);
                break;
            case "3":
                valor = cargarDato(2);
                break;
            case "4":
                valor = cargarDato(3);
                break;
            case "5":
                valor = cargarDato(4);
                break;
            case "6":
                valor = cargarDato(5);
                break;
            case "7":
                valor = cargarDato(6);
                break;
        }
    }

    else if (opcion1 == 2){
        diaMasRecorrido();
    }

    else if (opcion1 == 3){
        alert("La plataforma funciona de la siguiente manera:\n Usted debe seleccionar el día que desea realizar la carga de datos y luego usted podrá ver estadisticas de su entrenamiento semanal en base a los recorridos realizados.");
    }
    
    else if (opcion1 == 4) {
        alert("Nombre: " + persona1.nombre+ "\nApellido: " + persona1.apellido + "\nEdad: " + persona1.edad);
    }

    opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Día que mas Km se recorrio. \n3. Guia de usuario.\n4.Ver datos de usuario.\n5. SALIR.\nPor favor seleccione la opción que deseé para continuar:");

}

alert("Muchas gracias por su visita!");

//----------------------------------------------------------------------Funciones-----------------------------------------------------------------------------------------------------------------------------------------------
function cargarDato(dia) {
    let carga = prompt("Por favor ingrese la cantidad de kilometros que desee agregar al dia " + diasSemana[dia]);
    contDias[dia] += parseInt(carga);
    alert("Se sumo una cantidad de " + carga + " Kilometros al dia " + diasSemana[dia] + ".\nEl total acumulado de este día es: " + contDias[dia] + "Km");
    return carga;
}

// Función constructora de Objeto persona
function Persona(nombre, edad, apellido) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
}

// Función para busqueda de dia que mas se corrio.
function diaMasRecorrido(){
    let diaMayor = 0;
    let valorMayor = 0;
    for (let i = 0; i < contDias.length; i++){
        if (contDias[i] >= diaMayor){
            diaMayor = i;
            valorMayor = contDias[i];
        }
    }
    if (valorMayor > 0){
        alert("El dia que mas se recorrio kilometros fue el " + diasSemana[diaMayor] + " con una cantidad de " + valorMayor + " kilometros.");
    }
    else {
        alert("Aún no se han registrado carga de datos.");
    }
}