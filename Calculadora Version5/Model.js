class CalculatorModel
{
    constructor()
    {
      
     

    }
    
    calculate(expression)
    {
        
		return fetch('./calculate.php', { method:'post', body: JSON.stringify(expression) } ).then( response => response.json() );
    }
}

export {CalculatorModel};
