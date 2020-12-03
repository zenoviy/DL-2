console.log("Array");


const myFirsArr = [];
const arrayUseConstructor = new Array("John", "Bob", "Sara");

let arrayWithUsers = ["John", "Bob", "Sara"];


console.log(myFirsArr, arrayUseConstructor, arrayWithUsers);

console.log( arrayWithUsers.length );
console.log( arrayWithUsers[0] );

console.log( arrayWithUsers[ arrayWithUsers.length - 1 ]  );


const startUpArr = [1, 2, 3, 4].fill(0, 2, 7);
console.log(startUpArr);


arrayWithUsers.push("Bill", "Captain Pete");
console.log(arrayWithUsers);

arrayWithUsers.pop();
console.log(arrayWithUsers, " After pop");


arrayWithUsers.unshift("Sir John Long", "Johnplank");
console.log(arrayWithUsers, " Unshift");

arrayWithUsers.shift();
console.log(arrayWithUsers, " shift");


arrayWithUsers.splice(2, 1);
console.log(arrayWithUsers);

let myNewArray = arrayWithUsers.slice(2, 5);
console.log(myNewArray);



const myNewRelativeArr = arrayWithUsers;
console.log(myNewRelativeArr);

myNewRelativeArr.push("Pete De");

console.log(myNewRelativeArr, " myNewRelativeArr",  arrayWithUsers,  "arrayWithUsers");

const independentCopy = arrayWithUsers.slice();

independentCopy.push("Dreadful John");
console.log(
    myNewRelativeArr, " myNewRelativeArr",  
    arrayWithUsers,  "arrayWithUsers",
    independentCopy,  "independentCopy"
);

//arrayWithUsers.splice(2, 5);
//console.log(myNewArray);

arrayWithUsers.splice(3, 0, "The Large Pirate");
console.log(arrayWithUsers);

let indexOfValue = arrayWithUsers.indexOf("Pete De");
console.log(indexOfValue);

let searchObject = arrayWithUsers.find((object, index) => {
    if(object == "Pete De") return { object, index }
});

console.log(searchObject, " Find ");


let filteredObject = arrayWithUsers.filter((object, index) => {
    if(object.includes("a")) return object
});

console.log(filteredObject, " Filtered");

arrayWithUsers = arrayWithUsers.concat([], startUpArr, ["Morintroll", "Martirms"]);    
console.log(arrayWithUsers)


let joinedValue = arrayWithUsers.join("-");
document.write(joinedValue);


let arrayWithNumber = [45,56, 150, 8, 23, 67, 1, 8, 4, 9, 10, 3, -23];
let mapArray = arrayWithNumber.map((object, i) => {
    return object + 2;
});

console.log(mapArray)

let arrayReduceResult = mapArray.reduce((lastValue, currentVal) => {
    return lastValue + currentVal
});

console.log(arrayReduceResult);
 q


let sortedArrat_v1 = arrayWithNumber.sort();

console.log(sortedArrat_v1, " < sorting")


let propperlySortedArr = arrayWithNumber.sort((firstNumber, secondNumber) => {
    console.log(firstNumber, secondNumber)
    return firstNumber - secondNumber
});

console.log(propperlySortedArr)
propperlySortedArr = propperlySortedArr.reverse();


console.log(propperlySortedArr)



arrayWithUsers.forEach((captainName, index) => {
    console.log(captainName, index);
})

/*
const stackArray = [];
stackArray.push(1);
console.log(stackArray)
stackArray.push(2);
console.log(stackArray)
stackArray.push(3);
console.log(stackArray)
stackArray.push(4);
console.log(stackArray)

stackArray.pop();
console.log(stackArray)
stackArray.pop();
console.log(stackArray)
stackArray.pop();
console.log(stackArray)
stackArray.pop();
console.log(stackArray)

const hipArr = [];
stackArray.push(1);
console.log(stackArray)
stackArray.push(2);
console.log(stackArray)
stackArray.push(3);
console.log(stackArray)
stackArray.push(4);
console.log(stackArray)

stackArray.shift();
console.log(stackArray)
stackArray.shift();
console.log(stackArray)
stackArray.shift();
console.log(stackArray)
stackArray.shift();
console.log(stackArray)*/




