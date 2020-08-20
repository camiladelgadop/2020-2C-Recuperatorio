/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	
	var respuesta;
	var sexo;
	var lugar;
	var temporada;
	var cantidad;
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var lugarMasElegido;
	var sexoTitularMasPasajeros;
	var masPasajeros;
	var flagSexoMasPasajeros = true;
	var contadorPersonasPorViaje = 0;
	var acumuladorPersonasPorViaje = 0;

	do{

		do{
			sexo = prompt("ingrese sexo del titular")
		}while(sexo!= 'f' && sexo != 'm');

		do{
			lugar = prompt("ingrese lugar (bariloche-cataratas-salta)")
		}while(lugar != "bariloche" && lugar != "salta" && lugar != "cataratas");

		do{
			temporada = prompt("ingrese temporada");
		}while(temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano");

		do{
			cantidad = prompt("ingrese cantidad");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) || cantidad < 1);

		
		if(lugar == "bariloche"){
			contadorBariloche++
		}else if(lugar == "cataratas"){
			contadorCataratas++
		}else{
			contadorSalta++
		}


		if(flagSexoMasPasajeros){
			flagSexoMasPasajeros = false;
			masPasajeros = cantidad;
			sexoTitularMasPasajeros = sexo
		}else{
			if(cantidad > masPasajeros){
				masPasajeros = cantidad;
				sexoTitularMasPasajeros = sexo;
			}
		}

		contadorPersonasPorViaje++
		if (temporada == "invierno") {
			acumuladorPersonasPorViaje += cantidad;
		}


		respuesta = confirm ("desea continuar ?")
	}while(respuesta)

	//a
	if (contadorBariloche > contadorSalta && contadorBariloche > contadorCataratas){
		lugarMasElegido = "bariloche";
	}else if(contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
		lugarMasElegido = "cataratas";
	}else{
		lugarMasElegido = "salta";
	}
//A) lugar mas elegido
console.log( " el lugar mas elegido es: " + lugarMasElegido)

//B)el sexo de titular que lleva más pasajeros
console.log(" el sexo del titular que lleva mas pasajeros es : " + sexoTitularMasPasajeros);

//C)el promedio de personas por viaje,  que viajan en invierno
console.log( " el promedio de personas por viaje que viajan en invieno es: " + acumuladorPersonasPorViaje / contadorPersonasPorViaje);


}
