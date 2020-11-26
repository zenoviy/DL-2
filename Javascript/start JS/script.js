console.log("I am external Js file");

console.error("I am custom Error message");
console.warn("I am custom Warning message");

/*

    Внутрішні методи window 

    BOM Browser Object Model
        console 
                - log 
                - warn
                - error
                - dir
        alert - вікно
        confirm - вікно вибору  true false
        prompt - в яке можна вводити текст

    Dom Document Object Model


*/



/*
navigator.geolocation.getCurrentPosition((position) => {
    let coords = position.coords;

    let latitude = coords.latitude;
    let longitude = coords.longitude;
    let accuracy = coords.accuracy;

    console.log(`Довгота: ${latitude}  Широта: ${longitude} +- ${ accuracy }м `);
});
*/


/* Змінні і типи даних */

/*
    String - строка  (тексти)
    Number - числа (12,  12.43)   Infinity   -Infinity   // 10 в 32 степені
    Boolean - true false    0 1
    Object - масиви і самі об'єкти
    
    undefined - порожньо але виділена па'мять
    null - заглушка (коли немає первинного значення використовується)  null != 0

    Symbol - (Унікальні ідентифікатори об'єктів, для написання бібліотек)
    BigInt - дуже великі числа //       10 в 52 степені

*/

/*
    Контроль пам'яті - автоматичсно браузерно
    Браузер ізольовує надосяжні функції і частини коду
*/

/*
    Багатостроковий коментарь
*/

// однострічковий
// коментарь


// Змінні  зберігати різнотипову інформацію, щоб її можна було обробляти/виводити/зберігати
//  = це оператор присвоювання  
// код який ми пишемо називається інструкції 


// стара модель
var myFirstVariable = "Hello' World";  // String  глобальна змінна 
console.log(myFirstVariable, "Before change");

myFirstVariable = "i am a String Value";
console.log(myFirstVariable, "After change");

instanceVariable = "i am instance";
console.log(instanceVariable, " || ", window.instanceVariable);



///  ES-6 standart variable
const constantVariable = "You can`t change me";
let localVariable = "i am local block variable";   // працює в блоках локальна змінна

/// constantVariable = "try to chane";  // Виводить ерое намагання перезаписати const

console.log(
    window.constantVariable, 
    window.localVariable,
    constantVariable,
    localVariable
);

let localExternalVariable = 1;
if(true) {  
    let localBlockVariable = 3;   // let живе локально в блоковому середовищі
    var localVariableExternalAccess = 5;
    console.log(localExternalVariable, localBlockVariable, localVariableExternalAccess);
}

console.log(localExternalVariable, localVariableExternalAccess);




/* 
імена змінних
1) зрозумілі з логічним навантаженням 
2) ніяких скорочень, 
3) ні трансліту
4) не дуже довгі
5) дозволено використовувати _ $ #   не можна почина з цифр 1 ... 9  - + = () * : % № !
6) глобальні змінні не робіть 1-єю буквою!

Рефакторинг - переписування покращення коду 1 на 3 роки

camelCaseName 
Pascale_case   PascaleCase  - конструктори

$myVar
my_second_variable

*/

let userName = prompt("Введіть своє ім'я!", "John");

let stringTypeA = "string double quoted";
let stringTypeB = 'string single quoted';
let stringTypeC = `template string, 
Hello ${ userName }!`;

let numberVariable = 45;
let floatNumber = 45.343434;

let booleanA = true;
let booleanB = false;

let nullValue = null;
let undefinedValue;

let myObject = {
    name: "John",
    age: 20
};


console.log(
    stringTypeA,
    stringTypeB,
    stringTypeC,
    numberVariable,
    floatNumber,
    booleanA,
    booleanB,
    nullValue,
    undefinedValue,
    myObject
);

console.log( 
    typeof stringTypeA,
    typeof numberVariable,
    typeof floatNumber,
    typeof booleanA,
    typeof nullValue,
    typeof undefinedValue,
    typeof myObject
);

const __HOST_NAME = "http://localhost";
const PORT = "3000";





