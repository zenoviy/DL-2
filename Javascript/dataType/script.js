console.log("Work");


/*   String - строка  */

let stringMessage = "   Hello text Message I Am a text   ";
let messageLength = stringMessage.length;




console.log( stringMessage, messageLength, "hello".length );
console.log(String.prototype)


stringMessage = stringMessage.trim();  // видаляє пробіли

// charAt - буква по індексу

let characterX = stringMessage.charAt(8);
console.log(characterX,  " < .charAt(8)" );

console.log( stringMessage.charCodeAt(1),  " < .charCodeAt(1)");
console.log( stringMessage.indexOf("t"), " < .indexOf('t')" );
console.log( stringMessage.indexOf("mes"), " < .indexOf('mes')" );
console.log( stringMessage.includes("text"), " < .includes('text')");
console.log( stringMessage.includes("war"), " < .includes('war')");

console.log( stringMessage.match("war"), " <.match('war')" );
console.log( stringMessage.match("text"), " <.match('text')" );
console.log( [...stringMessage.matchAll("text")], " <.matchAll('text')" );

console.log( stringMessage.search("text"), " <.search('text')");

console.log( stringMessage.endsWith("text"), ` <.endsWith("text")` );
console.log( stringMessage.endsWith("a te"), ` <.endsWith("a te")` );

//  .startWith()

let regExpression = new RegExp(/[A-Z]/g);
console.log( [...stringMessage.matchAll(regExpression)], " <.match(RegExp)" );

stringMessage = stringMessage.replace("text", "Car");
stringMessage = stringMessage.replaceAll("e", "CAT");
console.log(stringMessage)

console.log( stringMessage.slice(0, 6), ` <.slice(0, 6)` );  // 6-й індекс не виводить
console.log( stringMessage.substr(0, 6), ` <.substr(0, 6)` );  
console.log( stringMessage.substring(0, 6), ` <.substring(0, 6)` );

console.log( stringMessage.substring(6), ` <.substring(6)` );

console.log( stringMessage.substring( stringMessage.length - 14 ), ` < .substring(stringMessage.length - 14)` );

stringMessage = stringMessage.toLowerCase();
console.log(stringMessage, ` <.toLowerCase()`);

stringMessage = stringMessage.toUpperCase();
console.log(stringMessage, ` <.toUpperCase()`);

let repeatText = "Text";
repeatText = repeatText.repeat(5);
console.log(repeatText, ` <.repeat(5)`);

let phoneNumber = "555_5656_5656_456";
console.log( phoneNumber.split("") );
console.log( phoneNumber.split("6") );
let formatedNumber = phoneNumber.split("_").join("--");
console.log(formatedNumber);

stringMessage = stringMessage.toLowerCase().split("cat").join('').toUpperCase();
console.log(stringMessage);

//====================================================

let stringA = "Hello";
let stringB = "World";

let helloText = stringA + " " + stringB + " Text in browser ";


let longTesx = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n \\ Pariatur ea blanditiis neque"
console.log(longTesx)


console.log(helloText);

let templateHello = `
    Browser says: ${ stringA }  ${ stringB },
    this text in browser window
`;
let concatResultText = helloText.concat(" + ", "Another text ", " + ", templateHello, " one more ");
console.log( concatResultText,  " .concat() " );

document.write(concatResultText);
document.write("Hello JavaScript");

console.log( concatResultText[1], " <  Get Character By index" );

let newString = new String("Some Text");
console.log(newString, " < створення через new");


let firstNumber = 5;
let stringNumber = "5";

let sumResult = firstNumber + stringNumber;
console.log(sumResult);


let sumExampleSecond = 5 + 5 + 10 + "777";
console.log(sumExampleSecond);


let multiResult = firstNumber * stringNumber;
console.log(multiResult);

let multiplyTwoString = "3" / "7";
console.log(multiplyTwoString);

//====================================================
/*  eval  */

let res = eval("2 + 2");
console.log(res, " < eval()");
let stringEvalRes = eval(new String("2 + 2"));
console.log(stringEvalRes, " < eval() + Srting");


let loremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Pariatur ea blanditiis neque at facere #car voluptatem quaerat #minima repellat 
illum officiis #voluptatibus repellendus asperiores totam dolorum #omnis placeat, 
rerum #car architecto aliquam.`;


let excerptLimit = 150;
let partOfTheText = ' ||    ' + loremText.substring(0, excerptLimit) + '...  Read more';

document.write(partOfTheText);

let tagSeparate = loremText.split("#");
console.log(tagSeparate)

let counter = 0;
for(let item of tagSeparate){
    if(!counter){
        counter++
        continue;
    } 
    let searchWord = item.split(" ");
    console.log(searchWord[0]);
}



/*  Програма знаходження речення */
let wordA = "blanditiis";
let wordB = "totam";


let wordA_Index = loremText.indexOf(wordA);
let wordB_Index = loremText.indexOf(wordB);

let resultText = loremText.substring(wordA_Index, wordB_Index);
console.log(resultText, " < програма пошуку в діапазоні");


/* Програма заміни */

let targetWord = "#car";
loremText = loremText.replaceAll(targetWord, `<a href="#">${targetWord}</a>`);

console.log(loremText);

// #car

/* =======  Number ======== */

let numFirst = 56;
let numSecond = new Number("232");


console.log(numFirst, numSecond, typeof numFirst, typeof numSecond);
console.log(numFirst + numSecond, " < різгні типи але додались як числа");


let numberOfString = "654";
console.log(numberOfString, typeof numberOfString," < до перетворення");

numberOfString = parseInt(numberOfString);
console.log(numberOfString, typeof numberOfString ," < після parseInt");


let numThird = parseInt("45.456456");  // в ціле число

console.log(numThird, typeof numThird,` < .parseInt("45.456456")`);

let numFour = parseFloat("45.456456");
console.log(numFour, typeof numFour, ` < .parseFloat("45.456456")`);

//numFour = numFour.toFixed(3);
console.log(numFour, typeof numFour, ` < .toFixed(3)`);

numFour = parseFloat( numFour.toFixed(3) );
console.log(numFour, typeof numFour, ` < parseFloat( numFour.toFixed(3) )`);


console.log(Math.PI, Math.pow(2, 3));



let stringConvertedNumber = 56;
console.log(typeof stringConvertedNumber, stringConvertedNumber, " < до перетворення");

stringConvertedNumber = stringConvertedNumber.toString();
console.log(typeof stringConvertedNumber, stringConvertedNumber, " < після перетворення");






