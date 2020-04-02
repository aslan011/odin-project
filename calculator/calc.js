currentNumber = null 
currentOp = null
nextNumber = null
operatorPressed = "N"
result = null

function add (a,b) {
	return a + b 
	
}
function subtract (a,b) {
	return a-b
	
}
function divide (a, b) {
	if (b == 0){
		alert("Nice try!")
		clearAll();}
	else {return a / b}
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
		return;
	}
	
}

function numberSelect(n){
	let button = document.getElementById("display");
	if (operatorPressed == "Y"){

		if (nextNumber == null){
			button.textContent = n;
			nextNumber = n
		}
		else {
			button.textContent += n;
			nextNumber += n
		}
	}

	else {
		if (currentNumber == null){
		button.textContent = n;
		currentNumber = n	
	}
		else {
			button.textContent += n;
			currentNumber += n
		}
	}
}

function operatorSelect(n){
	if (currentNumber == null){
		return;
	}
	else{
	operatorPressed = "Y"
	currentOp = n;
	}
	
}	

function decimal(){
	let button = document.getElementById("display");
	if (operatorPressed == "Y" && !nextNumber.includes(".")){
		nextNumber += "."
		button.textContent = nextNumber;
	}
	else if (operatorPressed == "N" && !currentNumber.includes(".")) {
		currentNumber += "."
		button.textContent = currentNumber;
	}

	else {return}
}

function equals(){
	let button = document.getElementById("display");
	if (button = ""){
		return;
	}

	else if (nextNumber == null){
		return;
	}
	else {
	cNum = Number(currentNumber);
	nNum = Number(nextNumber);
	operator(cNum,nNum,currentOp);
	let button = document.getElementById("display");
	button.textContent = result;
	currentNumber = result
	nextNumber = null;
	}

}

function clearAll(){
	currentNumber = null 
	currentOp = null
	nextNumber = null
	operatorPressed = "N"
	result = null
	let button = document.getElementById("display");
	button.textContent = "";

}