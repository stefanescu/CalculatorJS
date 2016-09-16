


var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;


for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) { //asigneaza fiecarui buton din calculator o functie
		
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
	
		if(btnVal == 'C') { //reseteaza calculatorul
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		
		else if(btnVal == '=') { //proceseaza ecuatia
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
		
			equation = equation.replace(/x/g, '*');
			
		
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];
			
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		
		else {
			input.innerHTML += btnVal;
		}
		

		e.preventDefault();
	} 
}