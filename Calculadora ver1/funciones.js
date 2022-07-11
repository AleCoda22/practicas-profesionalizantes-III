function init (){


//Get UI Elements from HTMLDocument
let display = document.getElementById("display");

let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonProduct = document.getElementById("buttonProduct");
let buttonDivision = document.getElementById("buttonDivision");
let buttonDecimalPoint = document.getElementById("buttonDecimalPoint");
let buttonClear = document.getElementById("buttonClear");
let buttonCalculate = document.getElementById("buttonCalculate");

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
	display.value = "";
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
  
}