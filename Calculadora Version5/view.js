import {CalculatorController} from './Controller.js';

function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
	/*Acceso a una posición específica de la tabla (fila,columna)
	tabla.childNodes[0].childNodes[nroFila]
	tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

	//Añade el elemento recibido
	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}



class CalculatorView extends HTMLElement
{
	constructor( externalModel)
	{
		super();

		this.innerModel= externalModel;

        this.innerController = new CalculatorController(this,this.innerModel);

		//Create UI Elements from HTMLDocument
		this.display = document.createElement('input');
		this.display.type = 'text';
		this.display.setAttribute('disabled','');
		this.display.value = '';
		this.display.classList.add('displayResult');

		this.button0 = document.createElement('button');
		this.button0.innerText = '0';
		this.button0.classList.add('numberButton');

		this.button1 = document.createElement('button');
		this.button1.innerText = '1';
		this.button1.classList.add('numberButton');

		this.button2 = document.createElement('button');
		this.button2.innerText = '2';
		this.button2.classList.add('numberButton');

		this.button3 = document.createElement('button');
		this.button3.innerText = '3';
		this.button3.classList.add('numberButton');

		this.button4 = document.createElement('button');
		this.button4.innerText = '4';
		this.button4.classList.add('numberButton');

		this.button5 = document.createElement('button');
		this.button5.innerText = '5';
		this.button5.classList.add('numberButton');

		this.button6 = document.createElement('button');
		this.button6.innerText = '6';
		this.button6.classList.add('numberButton');

		this.button7 = document.createElement('button');
		this.button7.innerText = '7';
		this.button7.classList.add('numberButton');


		this.button8 = document.createElement('button');
		this.button8.innerText = '8';
		this.button8.classList.add('numberButton');

		this.button9 = document.createElement('button');
		this.button9.innerText = '9';
		this.button9.classList.add('numberButton');

		this.buttonPlus = document.createElement('button');
		this.buttonPlus.innerText = '+';
		this.buttonPlus.classList.add('operatorButton');

		this.buttonMinus = document.createElement('button');
		this.buttonMinus.innerText = '-';
		this.buttonMinus.classList.add('operatorButton');

		this.buttonProduct = document.createElement('button');
		this.buttonProduct.innerText = '*';
		this.buttonProduct.classList.add('operatorButton');

		this.buttonDivision = document.createElement('button');
		this.buttonDivision.innerText = '/';
		this.buttonDivision.classList.add('operatorButton');

		this.buttonDecimalPoint = document.createElement('button');
		this.buttonDecimalPoint.innerText = '.';
		this.buttonDecimalPoint.classList.add('operatorButton');

		this.buttonClear = document.createElement('button');
		this.buttonClear.innerText = 'Borrar';
		this.buttonClear.classList.add('clearButton');

		this.buttonCalculate = document.createElement('button');
		this.buttonCalculate.innerText = '=';
		this.buttonCalculate.classList.add('calculateButton');

		//Creación de los elementos de layout
		 
		this.layout = document.createElement('table');
		for ( let i = 0; i<4; i++)
		{
			let filaActual = this.layout.insertRow();

			for( let c = 0; c<4; c++ )
			{
				filaActual.insertCell();
			}
		}

		let lastCell = this.layout.insertRow().insertCell();
		lastCell.setAttribute("colspan",4);
	}

	connectedCallback()
	{

		//Ubicar los elementos de la interfaz gráfica dentro del layout
		this.appendChild(this.display);
		this.appendChild(this.layout);
		this.appendChild(this.buttonClear);


		posicionarElementoEnTabla(this.layout,0,0,this.button7);
		posicionarElementoEnTabla(this.layout,0,1,this.button8);
		posicionarElementoEnTabla(this.layout,0,2,this.button9);
		posicionarElementoEnTabla(this.layout,0,3,this.buttonPlus);

		posicionarElementoEnTabla(this.layout,1,0,this.button4);
		posicionarElementoEnTabla(this.layout,1,1,this.button5);
		posicionarElementoEnTabla(this.layout,1,2,this.button6);
		posicionarElementoEnTabla(this.layout,1,3,this.buttonMinus);

		posicionarElementoEnTabla(this.layout,2,0,this.button3);
		posicionarElementoEnTabla(this.layout,2,1,this.button2);
		posicionarElementoEnTabla(this.layout,2,2,this.button1);
		posicionarElementoEnTabla(this.layout,2,3,this.buttonProduct);

		posicionarElementoEnTabla(this.layout,3,0,this.button0);
		posicionarElementoEnTabla(this.layout,3,1,this.buttonDecimalPoint);
		posicionarElementoEnTabla(this.layout,3,2,this.buttonCalculate);
		posicionarElementoEnTabla(this.layout,3,3,this.buttonDivision);

		//Append to itself
		/*this.appendChild(this.display);
		this.appendChild(this.button0);
		this.appendChild(this.button1);
		this.appendChild(this.button2);
		this.appendChild(this.button3);
		this.appendChild(this.button4);
		this.appendChild(this.button5);
		this.appendChild(this.button6);
		this.appendChild(this.button7);
		this.appendChild(this.button8);
		this.appendChild(this.button9);
		

		this.appendChild(this.buttonPlus);
		this.appendChild(this.buttonMinus);
		this.appendChild(this.buttonProduct);
		this.appendChild(this.buttonDivision);
		this.appendChild(this.buttonDecimalPoint);
		this.appendChild(this.buttonClear);

		this.appendChild(this.buttonCalculate);*/

		//Attach event-handler functions to each element
		this.button0.addEventListener('click', (event) => this.innerController.onButton0Click(event) );
		this.button1.addEventListener('click', (event) => this.innerController.onButton1Click(event) );
		this.button2.addEventListener('click', (event) => this.innerController.onButton2Click(event) );
		this.button3.addEventListener('click', (event) => this.innerController.onButton3Click(event) );
		this.button4.addEventListener('click', (event) => this.innerController.onButton4Click(event) );
		this.button5.addEventListener('click', (event) => this.innerController.onButton5Click(event) );
		this.button6.addEventListener('click', (event) => this.innerController.onButton6Click(event) );
		this.button7.addEventListener('click', (event) => this.innerController.onButton7Click(event) );
		this.button8.addEventListener('click', (event) => this.innerController.onButton8Click(event) );
		this.button9.addEventListener('click', (event) => this.innerController.onButton9Click(event) );


		this.buttonPlus.addEventListener('click', (event) => this.innerController.onButtonPlusClick(event) );
		this.buttonMinus.addEventListener('click', (event) => this.innerController.onButtonMinusClick(event) );
		this.buttonProduct.addEventListener('click', (event) => this.innerController.onButtonProductClick(event) );
		this.buttonDivision.addEventListener('click', (event) => this.innerController.onButtonDivisionClick(event) );
		this.buttonDecimalPoint.addEventListener('click', (event) => this.innerController.onButtonDecimalPointClick(event) );
		this.buttonClear.addEventListener('click', (event) => this.innerController.onButtonClearClick(event) );


		this.buttonCalculate.addEventListener('click', (event) => this.innerController.onButtonCalculateClick(event) );
	
	}
}


customElements.define('x-calculator-view', CalculatorView);
export { CalculatorView };
