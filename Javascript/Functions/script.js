console.log("Functions")

/*
    Function   - це шаблон / будівельний блок нашого коду
        - Declaration function
        - expression

        - IIFE Imediatly Invoke Function Expression  ( функція самовиклику )
        - Function Generator  - next()  yeld   - в асинхронному коді - декілька реквестів схожих 


        завданян функцій сегментувати/розділити код на логічні частини
        конвенції
            Принципи SOLID 
            а)    на довжину функції  !> 30 рядків
            b)    ім'я має відповіждати тому що функція робить
            c)    робити тільки одну дію ( по назві ) !!!
            d)    приймає і повертає значення 

            принцип DRY  - Dont Repeat Yourself

*/

let localVariable = "i am a global";
let functionResult = calculationProcessFunc(2, 3);
console.log(functionResult)

functionResult = calculationProcessFunc(23, 34);
console.log(functionResult)

functionResult = calculationProcessFunc(65, 76, 334, '45345', false, null);
console.log(functionResult)


function calculationProcessFunc(firstNumber, secondNumber) {   // Declaration function  записуються системою при читанні JS першими тому доступні по всьому скрипті
    /*let localVariable = "i am a local";
    console.log("i am a function", localVariable)*/
    console.log( arguments )
    let result = firstNumber + secondNumber;
    result = `Result of ${ firstNumber} + ${ secondNumber } = ${ result }`;
    return result
}



const expressMultylyFunction = function(a, b) {   // анонімна функція // експресивна   // прив'язані до змінних і створюються з ними
    return a * b
}
console.log(  expressMultylyFunction(4, 5)  ) 


/* ES - 6     Arrow function  - анонімна функція - з коротким записом - позбавлена власного лексичного простору */

const arrowCalculationMinus = ( a, b ) => a - b; 
console.log( arrowCalculationMinus(56, 34) )

const sayHelloToUSer = userName => {
    let phrase = `Hello ${userName}`;
    return phrase
};

document.write(  sayHelloToUSer("John") );


/*  IIFE  */

(function invoke(text){
    document.write(text)
})(" Invoke ")


/*  Generator Function   */

function* myGeneratorFunction(i) {
    yield i;
    yield i + 10;
    yield   `I was ${i}` ;
    yield i * 10;
    yield i * 20;
    yield i * 30;
}

let myGen  = myGeneratorFunction(3);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);



/* Замикання Clousure */
/*
    функція вищого порядку - повертає іншу

*/

function clousure(x){
    const innerFunction = function(y) {
        return x + y;
    }
    return innerFunction
}

let add = clousure(5);
console.log( add(3) , " < Clousure" )

/*  CallBack - функція яку можна передати в аргумент і пізніше використати */

const greatingsFunc = function(name, place, callback) {
    let stringText = `Hello ${name} from ${place} Greatings!!`;
    console.log("Request was sended")
    setTimeout(function() {
        console.log("Response was recieved")
        stringText = stringText + " Some information from server just arrived";
        let result = callback(stringText, " Programm is finished!");
        document.write(result)
    }, 2000)
};

greatingsFunc("Jack", "New York", function(helloString, extraString){
    let resultString  = helloString + extraString + " I  am Callback";
    return resultString
});


/*  Recursion  - код (функція) який сам себе викликає  */

function myPowFunction(number, power){
    if(power - 1){
        console.log(number, power)
        return number * myPowFunction(number, --power);
    } else return number
}

/*function power(base, exponent) {
    return exponent == 0? 1 : base * power(base, --exponent);
}*/

console.log( myPowFunction(3, 3), "< My Power")



/*   Calculator Rebuild 0.2 */
/*
let firstNumber = parseFloat(prompt("Enter first number"));
let secondNumber = parseFloat(prompt("Enter send number"));
let mathSign = prompt("Enter math sign allowed + - * / ",  "+");

console.log(mathSign, typeof mathSign)

if(!firstNumber || !secondNumber || !mathSign ||  
    typeof firstNumber != "number" || typeof secondNumber != "number"){
        console.error(" Invalid type of data");
        alert(" Invalid type of data")
} else if(mathSign !== "+" && mathSign !== "-" && mathSign !== "*" && mathSign !== "/"){
    alert("Wrong math operator must be only + - * /");
} else {
    
    let resultOfMath = null;
    if(mathSign === "+") {
        resultOfMath = firstNumber + secondNumber;
    } else if (mathSign === "-") {
        resultOfMath = firstNumber - secondNumber;
    }  else if (mathSign === "*") {
        resultOfMath = firstNumber * secondNumber;
    }  else if (mathSign === "/") {
        resultOfMath = firstNumber / secondNumber;
    }

    alert(`Math operatio ${firstNumber} ${mathSign} ${secondNumber} = ${resultOfMath} `);
}
*/

/* New version with function */ 
runCalculation()


/* business logic of calculator */
function runCalculation(){
    let calcInputs = getCalculationData();
    let validations = validationOfCalculationInputData(calcInputs);

    if( validations ) calculationResults(calcInputs);
    if( confirm(" start calculator again ?") ) runCalculation();
}






function getCalculationData() {
    let firstNumber = parseFloat(prompt("Enter first number"));
    let secondNumber = parseFloat(prompt("Enter send number"));
    let mathSign = prompt("Enter math sign allowed + - * / ",  "+");

    return { firstNumber, secondNumber,  mathSign }
}




function validationOfCalculationInputData(inputData) {
    let firstNumber = inputData.firstNumber;
    let secondNumber = inputData.secondNumber;
    let mathSign = inputData.mathSign;

    if(!firstNumber || !secondNumber || !mathSign ||  
        typeof firstNumber != "number" || typeof secondNumber != "number"){
            console.error(" Invalid type of data");
            return displayCalculationData(" Invalid type of data")
            
    } else if(mathSign !== "+" && mathSign !== "-" && mathSign !== "*" && mathSign !== "/"){
        return displayCalculationData("Wrong math operator must be only + - * /");
    }
    return true
}





function calculationResults(inputData){
    let firstNumber = inputData.firstNumber;
    let secondNumber = inputData.secondNumber;
    let mathSign = inputData.mathSign;

    let resultOfMath = null;
    if(mathSign === "+") {
        resultOfMath = firstNumber + secondNumber;
    } else if (mathSign === "-") {
        resultOfMath = firstNumber - secondNumber;
    }  else if (mathSign === "*") {
        resultOfMath = firstNumber * secondNumber;
    }  else if (mathSign === "/") {
        resultOfMath = firstNumber / secondNumber;
    }
    let calculationText =`Math operatio ${firstNumber} ${mathSign} ${secondNumber} = ${resultOfMath} `;
    displayCalculationData(calculationText)
}





function displayCalculationData(calculationData){
    alert(calculationData)
}


