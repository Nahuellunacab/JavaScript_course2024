const nombre = prompt("Buenas tardes, por favor ingrese su nombre para continuar");
alert("Buenas tardes " + nombre + ", esta es una plataforma para que usted pueda calcular su registro semanal de recorrido realizado en una actividad fisica.\nRecuerde que los valores que ingrese deben ser expresado en kilometros.\nPara continuar por favor presione 'aceptar'");

let opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Guia de usuario.\nPor favor seleccione la opción que deseé para continuar:");
let opcion2;

while (opcion1 != 1 && opcion1 != 2) {
    alert("La opción ingresada es incorrecta, por favor vuelva a ingresar una opción");
    opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Guia de usuario.\nPor favor seleccione la opción que deseé para continuar:");
}

//----------------------------------------------------Primera parte de elección de opcion1----------------------------------------------------------------------------------------------------------------------------------
if (opcion1 == 1) {
    opcion2 = prompt("Por favor ingrese el numero dia que quiere realizar la carga de datos recorridos:\n1. Lunes.\n2. Martes.\n3. Miercoles.\n4. Jueves.\n5. Viernes.\n6. Sabado.\n7. Domingo.");
    while (opcion2 < 1 || opcion2 > 7){
        alert("La opción ingresada es incorrecta, por favor vuelva a ingresar una opción");
        opcion2 = prompt("Por favor ingrese el numero dia que quiere realizar la carga de datos recorridos:\n1. Lunes.\n2. Martes.\n3. Miercoles.\n4. Jueves.\n5. Viernes.\n6. Sabado.\n7. Domingo.");
    }
    
//-----------------------------------------------------Segunda parte de elección de opcion2----------------------------------------------------------------------------------------------------------------------------------
    switch(opcion2){
        case 1:
            let valor1 = 0;
            valor1 = cargarDato("Lunes");
            alert("La cantidad de kilometros del dia Lunes es de " + valor1);
            break;
        case 2:
            let valor2 = 0;
            valor2 = cargarDato("Martes");
            alert("La cantidad de kilometros del dia Martes es de " + valor2);
            break;
        case 3:
            let valor3 = 0;
            valor3 = cargarDato("Miercoles");
            alert("La cantidad de kilometros del dia Miercoles es de " + valor3);
            break;
        case 4:
            let valor4 = 0;
            valor4 = cargarDato("Jueves");
            alert("La cantidad de kilometros del dia Jueves es de " + valor4);
            break;
        case 5:
            let valor5 = 0;
            valor5 = cargarDato("Viernes");
            alert("La cantidad de kilometros del dia Viernes es de " + valor5);
            break;
        case 6:
            let valor6 = 0;
            valor6 = cargarDato("Sabado");
            alert("La cantidad de kilometros del dia Sabado es de " + valor6);
            break;
        case 7:
            let valor7 = 0;
            valor7 = cargarDato("Domingo");
            alert("La cantidad de kilometros del dia domingo es de " + valor7);
            break;
    }
}

else if (opcion1 == 2){
    alert("La plataforma funciona de la siguiente manera:\n Usted debe seleccionar el día que desea realizar la carga de datos y luego usted podrá ver estadisticas de su entrenamiento semanal en base a los recorridos realizados.");

}

//----------------------------------------------------------------------Funciones-----------------------------------------------------------------------------------------------------------------------------------------------
function cargarDato(dia) {
    let carga = prompt("Por favor ingrese la cantidad de kilometros que desee agregar al dia " + dia);
    return carga;
}
