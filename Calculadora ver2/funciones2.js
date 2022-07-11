function init (){

function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
	/*Acceso a una posición específica de la tabla (fila,columna)
	tabla.childNodes[0].childNodes[nroFila]
	tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

	//Añade el elemento recibido
	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}



//Create UI Elements from HTMLDocument
let display = document.createElement('input');
display.type = 'text';
display.setAttribute('disabled','');
display.value = '';
display.classList.add('displayResult');

let button0 = document.createElement('button');
button0.innerText = '0';
button0.classList.add('numberButton');

let button1 = document.createElement('button');
button1.innerText = '1';
button1.classList.add('numberButton');

let button2 = document.createElement('button');
button2.innerText = '2';
button2.classList.add('numberButton');

let button3 = document.createElement('button');
button3.innerText = '3';
button3.classList.add('numberButton');

let button4 = document.createElement('button');
button4.innerText = '4';
button4.classList.add('numberButton');

let button5 = document.createElement('button');
button5.innerText = '5';
button5.classList.add('numberButton');

let button6 = document.createElement('button');
button6.innerText = '6';
button6.classList.add('numberButton');

let button7 = document.createElement('button');
button7.innerText = '7';
button7.classList.add('numberButton');

let button8 = document.createElement('button');
button8.innerText = '8';
button8.classList.add('numberButton');

let button9 = document.createElement('button');
button9.innerText = '9';
button9.classList.add('numberButton');

let buttonPlus = document.createElement('button');
buttonPlus.innerText = '+';
buttonPlus.classList.add('operatorButton');

let buttonMinus = document.createElement('button');
buttonMinus.innerText = '-';
buttonMinus.classList.add('operatorButton');

let buttonProduct = document.createElement('button');
buttonProduct.innerText = '*';
buttonProduct.classList.add('operatorButton');

let buttonDivision = document.createElement('button');
buttonDivision.innerText = '/';
buttonDivision.classList.add('operatorButton');

let buttonCalculate = document.createElement('button');
buttonCalculate.innerText = '=';
buttonCalculate.classList.add('calculateButton');

let buttonDecimalPoint = document.createElement('button');
buttonDecimalPoint.innerText = '.';
buttonDecimalPoint.classList.add('operatorButton');

let buttonClear = document.createElement('button');
buttonClear.innerText = 'Borrar';
buttonClear.classList.add('clearButton');

//Creación de los elementos de layout
let tabla = document.createElement("table");
for ( let i = 0; i<5; i++)
{
	let filaActual = tabla.insertRow();

	for( let c = 0; c<5; c++ )
	{
		filaActual.insertCell();
	}
}


//Create function reaction-event handlers

function onButton0Click()
{   	
	display.value += '0';
}

function onButton1Click()
{   	
	display.value += '1';
}

function onButton2Click()
{   	
	display.value += '2';
}

function onButton3Click()
{   	
	display.value += '3';
}

function onButton4Click()
{   	
	display.value += '4';
}
function onButton5Click()
{   	
	display.value += '5';
}

function onButton6Click()
{   	
	display.value += '6';
}

function onButton7Click()
{   	
	display.value += '7';
}

function onButton8Click()
{   	
	display.value += '8';

}

function onButton9Click()
{   	
	display.value += '9';
}

function onButtonPlusClick()
{   	
	display.value += '+';
}

function onButtonMinusClick()
{   	
	display.value += '-';
}

function onButtonProductClick()
{   	
	display.value += '*';
}

function onButtonDivisionClick()
{   	
	display.value += '/';
}

function onButtonDecimalPointClick()
{   	
	display.value += '.';
}

function onButtonClearClick()
{   	
	display.value = '';
}

function onButtonCalculateClick()
{
  display.value = eval(display.value);
}

//Attach event-handler functions to each element

button0.addEventListener('click', onButton0Click );
button1.addEventListener('click', onButton1Click );
button2.addEventListener('click', onButton2Click );
button3.addEventListener('click', onButton3Click );
button4.addEventListener('click', onButton4Click );
button5.addEventListener('click', onButton5Click );
button6.addEventListener('click', onButton6Click );
button7.addEventListener('click', onButton7Click );
button8.addEventListener('click', onButton8Click );
button9.addEventListener('click', onButton9Click );




buttonPlus.addEventListener('click', onButtonPlusClick );
buttonMinus.addEventListener('click', onButtonMinusClick );
buttonProduct.addEventListener('click', onButtonProductClick );
buttonDivision.addEventListener('click', onButtonDivisionClick );
buttonDecimalPoint.addEventListener('click', onButtonDecimalPointClick );
buttonClear.addEventListener('click', onButtonClearClick );

buttonCalculate.addEventListener('click', onButtonCalculateClick );
 
//Ubicar los elementos de la interfaz gráfica dentro del layout
document.body.appendChild(display);
document.body.appendChild(tabla);
document.body.appendChild(buttonClear);

posicionarElementoEnTabla(tabla,0,0,button7);
posicionarElementoEnTabla(tabla,0,1,button8);
posicionarElementoEnTabla(tabla,0,2,button9);
posicionarElementoEnTabla(tabla,0,3,buttonPlus);

posicionarElementoEnTabla(tabla,1,0,button4);
posicionarElementoEnTabla(tabla,1,1,button5);
posicionarElementoEnTabla(tabla,1,2,button6);
posicionarElementoEnTabla(tabla,1,3,buttonMinus);

posicionarElementoEnTabla(tabla,2,0,button3);
posicionarElementoEnTabla(tabla,2,1,button2);
posicionarElementoEnTabla(tabla,2,2,button1);
posicionarElementoEnTabla(tabla,2,3,buttonProduct);

posicionarElementoEnTabla(tabla,3,0,button0);
posicionarElementoEnTabla(tabla,3,1,buttonDecimalPoint);
posicionarElementoEnTabla(tabla,3,2,buttonCalculate);
posicionarElementoEnTabla(tabla,3,3,buttonDivision);






	
}