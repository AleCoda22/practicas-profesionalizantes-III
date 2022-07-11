var operandoa;
var operandob;
var operacion;
function init (){
	// variables
	var resultado = document.getElementById("resultado");
	var borrar = document.getElementById("borrar");
	var suma = document.getElementById("button+");
	var resta = document.getElementById("button-");
	var multiplicacion = document.getElementById("button*");
	var division = document.getElementById("button/");	
	var igual= document.getElementById("button=");
	var uno = document.getElementById("button1");
	var dos = document.getElementById("button2");
	var tres = document.getElementById("button3");
	var cuatro = document.getElementById("button4");
	var cinco = document.getElementById("button5");
	var seis = document.getElementById("button6");
	var siete = document.getElementById("button7");
	var ocho = document.getElementById("button8");
	var nueve = document.getElementById("button9");
	var cero = document.getElementById("button0");
	var decimal = document.getElementById("buttonpoint");
	
	//eventos
	uno.onclick = function(e){
		resultado.textContent= resultado.textContent + "1";
	}

	dos.onclick = function(e){
		resultado.textContent =  resultado.textContent + "2";
		
	}
	tres.onclick = function(e){
		resultado.textContent =  resultado.textContent + "3";
		
	}
	cuatro.onclick = function(e){
		resultado.textContent =  resultado.textContent + "4";
		
	}
	cinco.onclick = function(e){
		resultado.textContent =  resultado.textContent + "5";
		
	}
	seis.onclick = function(e){
		resultado.textContent =  resultado.textContent + "6";
		
	}
	siete.onclick = function(e){
		resultado.textContent =  resultado.textContent + "7";
		
	}
	ocho.onclick = function(e){
		resultado.textContent =  resultado.textContent + "8";
		
	}
	nueve.onclick = function(e){
		resultado.textContent =  resultado.textContent + "9";
		
	}
	cero.onclick = function(e){
		resultado.textContent =  resultado.textContent + "0";
		
	}

	decimal.onclick = function(e){
		resultado.textContent =  resultado.textContent + ".";
		
	}

	borrar.onclick = function(e){
		reset();
		
	}
	suma.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "+";
		limpiar();
		
	}
	resta.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "-";
		limpiar();
		
	}
	multiplicacion.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	
	division.onclick = function(e){
		operandoa = resultado.textContent;
		operacion = "/";
		limpiar();	
	}

	igual.onclick = function(e){
		operandob = resultado.textContent;
		resolver();
			
	}
}
function limpiar(){
		resultado.textContent = "";

	}

	function reset(){
		resultado.textContent = "";
		operandoa = 0;
		operandob = 0;
		operacion = 0;
	}
function resolver(){
	var res = 0;
	switch (operacion){
		case "+":
		res = parseFloat(operandoa) + parseFloat(operandob);
		break;

		case "-":
		res = parseFloat(operandoa) - parseFloat(operandob);
		break;
		
		case "*":
		res = parseFloat(operandoa) * parseFloat(operandob);
		break;

		case "/":
		res = parseFloat(operandoa) / parseFloat(operandob);
		break;

	}

 reset();
 resultado.textContent = res;

}