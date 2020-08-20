/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador = 0;
	var nombre;
	var peso;
	var sexo;
	var edad;
	var contadorMujeres = 0;
	var acumuladorEdad = 0;
	var nombreHombreMasPesado = "no se ingresaron hombres";
	var MasPesado;
	var flagHombre = true;
	


	while(contador < 5){
		contador++

	    do{
			nombre = prompt("ingrese nombre");
		}while(nombre == null);
	
		do{
			peso = prompt("ingrese peso");
			peso = parseInt(peso);
		}while(isNaN(peso) || peso < 1 );
	
		do{
			sexo = prompt("ingrese sexo f o m");
		}while( sexo != 'f' && sexo != 'm');
	
		do{
			edad = prompt("ingrese edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 0 );
	
	
		if(sexo == 'f'){
			contadorMujeres++;
		}

		acumuladorEdad += edad;

		if(sexo == 'm'){
			if(flagHombre){
				flagHombre = false;
				MasPesado = peso;
				nombreHombreMasPesado = nombre;
			}else{
				if(peso > MasPesado){
					MasPesado = peso;
					nombreHombreMasPesado = nombre;
				}
			}
		}


	}//end while




//a) cantidad de mujeres
console.log( "la cantidad de mujeres es :"  + contadorMujeres );
//b)la edad promedio en total.
console.log( " la edad promedio total es: " + acumuladorEdad / contador);
//c)el hombre mas pesado
console.log(" el hombre mas pesado es : " + nombreHombreMasPesado );



}