class  CalculatorController
{
    constructor(view,model)
    {
       this.innerview = view;
       this.innermodel = model;
    }

	onButton0Click()
	{   	
		this.innerview.display.value += '0';
	}

	onButton1Click()
	{   	
		this.innerview.display.value += '1';
	}

	onButton2Click()
	{   	
		this.innerview.display.value += '2';
	}

	onButton3Click()
	{   	
		this.innerview.display.value += '3';
	}

	onButton4Click()
	{   	
		this.innerview.display.value += '4';
	}

	onButton5Click()
	{   	
		this.innerview.display.value += '5';
	}

	onButton6Click()
	{   	
		this.innerview.display.value += '6';
	}

	onButton7Click()
	{   	
		this.innerview.display.value += '7';
	}

	onButton8Click()
	{   	
		this.innerview.display.value += '8';
	}

	onButton9Click()
	{   	
		this.innerview.display.value += '9';
	}

	onButtonPlusClick()
	{   	
		this.innerview.display.value += '+';
	}

	

	onButtonMinusClick()
	{   	
		this.innerview.display.value += '-';
	}

	onButtonProductClick()
	{   	
		this.innerview.display.value += '*';
	}

	onButtonDivisionClick()
	{   	
		this.innerview.display.value += '/';
	}

	onButtonDecimalPointClick()
	{   	
		this.innerview.display.value += '.';
	}

	onButtonClearClick()
	{   	
		this.innerview.display.value = '';
	}


	onButtonCalculateClick()
	{
	  this.innermodel.calculate(this.innerview.display.value).then( response => this.innerview.display.value=response );
	}
}

export {CalculatorController};
