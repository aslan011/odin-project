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

operator(2,3,"")