let nombre = prompt("Buenas tardes, por favor ingrese su nombre para continuar");
alert("Buenas tardes " + nombre + ", esta es una plataforma para que usted pueda calcular su registro semanal de recorrido realizado en una actividad fisica.\nRecuerde que los valores que ingrese deben ser expresado en kilometros.\nPara continuar por favor presione 'aceptar'");

var opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Guia de usuario.\nPor favor seleccione la opción que deseé para continuar:");

while (opcion1 != 1 && opcion1 != 2) {
    alert("La opción ingresada es incorrecta, por favor vuelva a ingresar una opción");
    var opcion1 = prompt("1. Realizar carga de datos de recorrido.\n2. Guia de usuario.\nPor favor seleccione la opción que deseé para continuar:");


}

//----------------------------------------------------Primera parte de elección de opcion1----------------------------------------------------------------------------------------------------------------------------------
if (opcion1 == 1) {
    var opcion2 = prompt("Por favor ingrese el numero dia que quiere realizar la carga de datos recorridos:\n1. Lunes.\n2. Martes.\n3. Miercoles.\n4. Jueves.\n5. Viernes.\n6. Sabado.\n7. Domingo.");
    while (opcion2 < 1 || opcion2 > 7){
        alert("La opción ingresada es incorrecta, por favor vuelva a ingresar una opción");
        var opcion2 = prompt("Por favor ingrese el numero dia que quiere realizar la carga de datos recorridos:\n1. Lunes.\n2. Martes.\n3. Miercoles.\n4. Jueves.\n5. Viernes.\n6. Sabado.\n7. Domingo.");

    }
if (opcion1 == 2){
    alert("La plataforma funciona de la siguiente manera:\n Usted debe seleccionar el día que desea realizar la carga de datos y luego usted podrá ver estadisticas de su entrenamiento semanal en base a los recorridos realizados.");
}
}
//-----------------------------------------------------Segunda parte de elección de opcion2----------------------------------------------------------------------------------------------------------------------------------
if (opcion2 == 1){
    var valor1 = 0;
    var valor1 = cargarDato("Lunes");
    alert("La cantidad de kilometros del dia Lunes es de " + valor1);
}
else if (opcion2 == 2){
    var valor2 = 0;
    var valor2 = cargarDato("Martes");
    alert("La cantidad de kilometros del dia Martes es de " + valor2);

}   
else if (opcion2 == 3){
    var valor3 = 0;
    var valor3 = cargarDato("Miercoles;")
    alert("La cantidad de kilometros del dia Miercoles es de " + valor3);

}
else if (opcion2 == 4){
    var valor4 = 0;
    var valor4 = cargarDato("Jueves");
    alert("La cantidad de kilometros del dia Jueves es de " + valor4);

}
else if (opcion2 == 5){
    var valor5 = 0;
    var valor5 = cargarDato("Viernes");
    alert("La cantidad de kilometros del dia Viernes es de " + valor5);

}
else if (opcion2 == 6){
    var valor6 = 0;
    var valor6 = cargarDato("Sabado");
    alert("La cantidad de kilometros del dia Sabado es de " + valor6);

}
else if (opcion2 == 7){
    var valor7 = 0;
    var valor7 = cargarDato("Domingo");
    alert("La cantidad de kilometros del dia domingo es de " + valor7);

}

//----------------------------------------------------------------------Funciones-----------------------------------------------------------------------------------------------------------------------------------------------
function cargarDato(dia) {
    var carga = prompt("Por favor ingrese la cantidad de kilometros que desee agregar al dia " + dia)
    return carga
}