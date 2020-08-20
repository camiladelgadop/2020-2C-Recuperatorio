/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

var respuesta;
var marca;
var precio;
var peso;
var tipo;
var acumuladorPeso = 0;
var masCaroLiqudos;
var marcaLiquidoCaro = " no se ingrsaron liquidos";
var flagLiquido = true;
var marcaMasBaratoSolido = "no se ingresaron solidos";
var masBaratoSolido;
var flagSolido = true;



do{

  do{
    marca = prompt("ingrese marca");
  }while(marca == null);

  do{
    precio = prompt("ingrese precio");
    precio = parseFloat(precio);
  }while(isNaN(precio)||precio < 1);

  do{
    peso = prompt("ingrese peso");
    peso = parseInt(precio);
  }while(isNaN(peso) || peso < 1);

  do{
    tipo = prompt("ingrese tipo (solido o liquido)");
  }while(tipo != "solido" && tipo != "liquido");


 acumuladorPeso += peso;

 if(tipo == "liquido"){
   if(flagLiquido){
    flagLiquido = false;
    masCaroLiqudos = precio;
    marcaLiquidoCaro = marca;
   }else{
     if(precio > masCaroLiqudos){
        masCaroLiqudos = precio;
        marcaLiquidoCaro = marca;
     }
   }
 }else{
   if(flagSolido){
    flagSolido = false;
    masBaratoSolido = precio;
    marcaMasBaratoSolido = marca;
  }else{
    if(precio < masBaratoSolido){
      masBaratoSolido = precio;
      marcaMasBaratoSolido = marca;
    }
  }
}

respuesta = confirm("desea continuar?")
}while(respuesta);

//a)informar el peso total de la compra.
console.log( " el peso total de la compra es : " + acumuladorPeso);
//b)la marca del más caro de los líquidos
console.log(" la marca del mas caro de los liquidos es: " + marcaLiquidoCaro);
//c)la marca del más barato de los sólidos
console.log(" la marca del mas barato de los solidos es: " + marcaMasBaratoSolido);




}
