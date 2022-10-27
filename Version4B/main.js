import {CalculatorView} from './view.js';
import {CalculatorModel} from './Model.js';


function main()
{
	let myCalculatorModel = new CalculatorModel();
	let myCalculatorView = new CalculatorView(myCalculatorModel);

	document.body.appendChild(myCalculatorView);
}



window.addEventListener('load',main );