let resultValue = 0; let dispValue=""; let firstNumber= 0; 
let secondNumber= 0; let operator=""; let equal=""; let operatorT="";

let add= (a,b) => {return a+b;}
let substract = function(a,b) {return a-b;}
let multiply = (a, b) => {return a*b;}
let devide = (a,b) => {return a/b}
let screenValue = function(a) { display.innerHTML = a;}

const calDisplay= document.getElementById('calDisplay');
display = document.createElement("p");
display.classList.add("display");
calDisplay.appendChild(display);
window.addEventListener('keydown', dispGenerator);

function dispGenerator(e){
    const button= calContainer.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!button){return}
    if (button.value == "+"){
        operator=button.value;
        testNumber();
    }else if(button.value == "-"){
        operator=button.value;
        testNumber();   
    }else if (button.value == "*"){
        operator=button.value;
        testNumber();   
    }else if (button.value == "/"){
        operator=button.value;
        testNumber();   
    }else if (button.value == "="){
        equal = button.value;
        testNumber();
    }else if (button.value == "c"){
        clear();
        screenValue(dispValue);
    }else if (button.value == "d"){
        del();
    }else if (button.value == "."){
        if(dispValue.includes('.')){
            dispValue=dispValue;
        }else if (dispValue ==""){
            dispValue='0.';
            screenValue(dispValue);
        }else{
            dispValue+= button.value;
            screenValue(dispValue);
        }
    }else {
        if(dispValue.length > 12){
            dispValue=dispValue;
        }else{
        dispValue += button.value;
        }
        screenValue(dispValue);
    }
}
let testNumber = function(){
    if (firstNumber == 0 && secondNumber == 0){
        if(equal=='='){
            dispValue=dispValue;
            equal="";
        }else{
            firstNumber= Number(dispValue);
            operatorT=operator;
            dispValue="";
            screenValue(dispValue);
        }
    }else if (firstNumber != 0 && secondNumber == 0){
        secondNumber=Number(dispValue);
        testOperator();
        operatorT = operator;
        dispValue="";
            if(equal == "="){
                clear();
            }
    }else if (firstNumber!= 0 && secondNumber != 0){
        firstNumber = resultValue;
        secondNumber =Number (dispValue);
        testOperator();
        operatorT = operator;
        dispValue="";
            if(equal == "="){
                clear();
            }
    }
}
let testOperator = function(){
    if(operatorT == '+'){
        resultValue = +(add(firstNumber, secondNumber).toFixed(6));
        screenValue(resultValue);
    }else if(operatorT == '-'){
        resultValue = +(substract(firstNumber,secondNumber).toFixed(6));
        screenValue(resultValue);
    }else if(operatorT == '*'){
        resultValue = +(multiply(firstNumber,secondNumber).toFixed(6));
        screenValue(resultValue);
    }else if(operatorT == '/'){
        if (secondNumber == 0){
            dispValue= "ERROR"
            screenValue(dispValue);
            clear();
        } else{
            resultValue = +(devide(firstNumber,secondNumber).toFixed(6)); 
            screenValue(resultValue);}
    }
}
let clear = function(){
    resultValue = 0; dispValue=""; firstNumber= 0; 
    secondNumber= 0; operator=""; equal=""; operatorT="";
}
let del = function(){
    dispValue= dispValue.slice(0, (dispValue.length -1));
    screenValue(dispValue)
}

