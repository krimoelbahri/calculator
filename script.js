let resultValue = ""; let dispValue=""; let firstNumber= ""; let delTest="on";
let secondNumber= ""; let operator=""; let equalTest=""; let operatorTest="";

const add= (a,b) => {return a+b;};
const subtract = (a,b)=> {return a-b;};
const multiply = (a, b) => {return a*b;};
const divide = (a,b) => {return a/b;};

const calDisplay= document.getElementById("calDisplay");
const calContainer= document.getElementById("calContainer");
const screenValue = function(a) { calDisplay.innerHTML = a;};
const toggleEvent = function(e){
	if(e.type === "click"){
		let buttonVal= e.target.value;
		dispGenerator(buttonVal);
	}
	if(e.type === "keydown"){
		const button= calContainer.querySelector(`button[data-key="${e.keyCode}"]`);
		if (!button){return;}
		let buttonVal= button.value;
		dispGenerator(buttonVal);
	}
};
const dispGenerator= function(buttonVal){

	if (buttonVal === "+" || buttonVal === "-" || buttonVal === "*" 
    || buttonVal === "/" || buttonVal === "="){
		operator = buttonVal;
		equalTest= buttonVal;
		delTest= "off";
		testNumber();
		return;
	}
	if (buttonVal === "d"){
		del();
		return;
	}
	if (buttonVal === "c"){
		clear();
		screenValue("0");
		return;
	}
	if (buttonVal == "."){
		dispDecimal();
		return;
	}	
	if(dispValue.length > 14){
		return;
	}else{
		delTest="on";
		dispValue += buttonVal;
		screenValue(dispValue);
	}
};

const testNumber = function(){
	if (firstNumber == "" && secondNumber == ""){
		if(equalTest === "="){
			equalTest="";
		}else{
			firstNumber= Number(dispValue);
			operatorTest=operator;
			dispValue="";
			screenValue(firstNumber);
		}
		return;
	}
	if (firstNumber != "" && secondNumber == ""){
		secondNumber=Number(dispValue);
		testOperator();
		operatorTest = operator;
		dispValue="";
		if(equalTest == "="){
			clear();
		}
		return;
	}
	if (firstNumber!= "" && secondNumber != ""){
		firstNumber = resultValue;
		secondNumber =Number (dispValue);
		testOperator();
		operatorTest = operator;
		dispValue="";
		if(equalTest == "="){
			clear();
		}
	}
};

const testOperator = function(){
	if(operatorTest == "+"){
		resultValue = +(add(firstNumber, secondNumber).toFixed(6));
		screenValue(resultValue);
	}
	if(operatorTest == "-"){
		resultValue = +(subtract(firstNumber,secondNumber).toFixed(6));
		screenValue(resultValue);
	}
	if(operatorTest == "*"){
		resultValue = +(multiply(firstNumber,secondNumber).toFixed(6));
		screenValue(resultValue);
	}
	if(operatorTest == "/"){
		if (secondNumber == 0){
			dispValue= "ERROR";
			screenValue(dispValue);
			clear();
		} else{
			resultValue = +(divide(firstNumber,secondNumber).toFixed(6)); 
			screenValue(resultValue);}
	}
};
const clear = function(){
	resultValue = ""; dispValue=""; firstNumber= ""; 
	secondNumber= ""; operator=""; equalTest=""; operatorTest="";
};
const del = function(){
	if(delTest==="on"){
		dispValue= dispValue.slice(0, (dispValue.length -1));
		screenValue(dispValue);
	}
	if((dispValue.length) === 0){
		screenValue("0");
	}
};
const dispDecimal= function(){
	if(dispValue.includes(".")){
		return;
	}
	if(dispValue ===""){
		dispValue += "0.";
		screenValue(dispValue);

	}else{
		dispValue += ".";
		screenValue(dispValue);
	}
};
document.querySelectorAll("button").forEach((elm)=>{elm.addEventListener("click",toggleEvent);});
window.addEventListener("keydown", toggleEvent);


