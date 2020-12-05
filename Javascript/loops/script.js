console.log("Loops")

/*
    for     let index  i++   // обходить масив від початку до кінця  // або до якогось значення
    while    працює доки умова не справдиться   
    do while   спрацює 1 раз точно  
    
    for of    для обходу об'єктів 
    for in    обхід масиви

*/
const arr = [23, 34, 1, 56, 78, 90, 12, 50, -3, 678];

// break
// continue

/* For Loops */


for(let i = 0; i < arr.length; i++) {
    //if(arr[i] === 56) break
    if(arr[i] === 56  ||  arr[i] === 90 ) continue

    //console.log(arr[i], i)
}


for(let i = 0, k = 5; i < 5 && k > 0; i++, k--){
    //console.log(i, k)
}


/* While Loops */


let increaserValue = 0;
while(increaserValue < 100) {
    increaserValue = Math.floor(Math.random() * 150);
    document.write(`||  ${increaserValue}  `);
}

//console.log(increaserValue)




let doWhileInreaser = 100;
do{
    doWhileInreaser = Math.floor(Math.random() * 150);
    document.write(`<<  ${doWhileInreaser}  `);
}while(doWhileInreaser < 100)


let decrementPostfix = 0;
let decrementPostfixCopy = decrementPostfix++;
decrementPostfixCopy = ++decrementPostfix;

//console.log(decrementPostfixCopy);



/*  for of */

for(let arrItem of arr) {
    console.log(arrItem);
}

for(let indexes in arr) {
    console.log(indexes, arr[indexes]);
}



let max = -Infinity;
let min = Infinity;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i];
    } else if ( arr[i] < min ) {
        min = arr[i];
    }
}

console.log(`Max number in array arr = ${max} and min = ${min}`);


/*  Bubble sorting  */

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
            let localCopy = arr[j];
            //debugger
            arr[j] = arr[j + 1];
            arr[j + 1] = localCopy;
        }
    }
}

console.log(arr)



/* ==========================  Logic  operators  ============================ */

/*
    Boolean true/false

    ! 
*/

if( '' == false ) {
    console.log("I am a Truth!");
}

/*  >   <   >=    <=   !=   !==     ==   === типи даних   */

let a = 24;
let b = 23;
let c = 98;


/*
if( a > b ) {
    if( a > c ){
        document.write(`A is greater = ${a}`);
    } else if(a < c) {
        document.write(`C is greater = ${c}`);
    } else {
        document.write(`Somethin was wrong with script`);
    }
} else if( b > a) {
    if(b > c) {
        document.write(`B is greater = ${b}`);
    } else {
        document.write(`B is greater = ${c}`);
    }
}
*/

/*  &&    ||  */

if(true && true && true && true) {
    console.log("Access!");
}
if(true && true && false && true) {
    console.log("Access Danied");
}


if(false || false || false) {
    console.log("Access Danied");
}
if(false || true || false) {
    console.log("Access Danied");
}

if((true || false) && ((false && false) || (true && true))) {
    console.log("Complicated example");
}

if((4 + 5 < 10) && ( (10 + 5) / 3 == 5 )){
    console.log("Complicated with math");
}




if(a > c && a > b) {
    console.log("A");
    document.write(`A is greater = ${a}`);
} else if ( b > a && b > c) {
    document.write(`B is greater = ${b}`);
} else  document.write(`C is greater = ${c}`);



let someNumber = 2;

switch(someNumber) {
    case 1: 
        console.log(1);
        break
    case 2:
        console.log(2);
        break
    case 3:
        console.log(3);
        break
    case 4:
        console.log(4);
        break
    case 5:
        console.log(5);
        break
    default:
        console.log(">", 5);
}

const firstNumber = parseFloat(prompt("Enter first number"));
const secondNumber = parseFloat(prompt("Enter send number"));
const mathSign = prompt("Enter math sign allowed + - * / ",  "+");

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
/*
Старий варіант калькулятора

let calculationResult = firstNumber / secondNumber;
console.log(calculationResult)

*/






