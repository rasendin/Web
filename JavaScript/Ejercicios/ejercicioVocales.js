let cadena=prompt("Dame la cadena");
	let contadorVocales=0;
	let cadenaReves="";
	for(let i=0;i<cadena.length;i++){
		if(cadena.charAt(i).toLowerCase()=="a" 
		|| cadena.charAt(i).toLowerCase()=="e"
		|| cadena.charAt(i).toLowerCase()=="i" 
		|| cadena.charAt(i).toLowerCase()=="o"
		|| cadena.charAt(i).toLowerCase()=="u")
			contadorVocales=contadorVocales+1;
		cadenaReves=cadena.charAt(i)+cadenaReves;
	}
	document.write("Cantidad de vocales es:"+contadorVocales
	+"\ncadena al revés:"+cadenaReves);