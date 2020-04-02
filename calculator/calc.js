function add (a,b) {
	return a+b
	
}
function subtract (a,b) {
	return a-b
	
}
function divide (a, b) {
	return a / b
	
}

function multiply (a, b){
    return a * b
}

function operator (a, b, op){
	if (op == "+"){
		result = add(a,b)
	}
	else if (op == "-"){
		result = subtract(a,b)
	}
	else if (op == "/"){
		result = divide(a,b)
	}
	else if (op == "*"){
		result = multiply(a,b)
	}
	else {
		result = "Error"
	}
	console.log(result)
}

function numberSelect(n){
	let button = document.getElementById("display");
	button.textContent += n;
	
}

function operatorSelect(n){
	let operator = document.getElementById("display");
	operator.textContent += ` ${n} `;
}

function equals(){
	let calculation = document.getElementById("display");
	let currentCalc = calculation.textContent.split(" ");
	calculation.textContent += " =";
	console.log(currentCalc);

}

