console.log('Events')



function clickMe( helloText ) {
    console.log( helloText );
}
function clickableBoxEvent(){
    console.log( 'Event has been occured !');
}
function boxHoverEvent(){
    console.log('Hover Event');
}









/*  ======= Click Counter ======= */

let clickCount = 0;
const plusBtn = document.querySelector("#plus-btn"); 
const minusBtn = document.querySelector("#minus-btn"); 
const dispayClicks = document.querySelector("#dispay-clicks");

plusBtn.onclick = function(event) {
    //alert("+")
    //console.log(plusBtn)
    clickCount += 1;
    displayClicksResult()
}
minusBtn.onclick = function(event) {
    //alert("-")
    //console.log(minusBtn)
    //console.log(event)
    clickCount -= 1;
    displayClicksResult()
}

displayClicksResult()
function displayClicksResult(){
    dispayClicks.innerHTML = `<h2>${clickCount} Clicks</h2>`
}












/*  ======= Click Counter End ======= */

const eventListenerBtn = document.querySelector("#event-listener-btn");
let eventButtonActive = false;

eventListenerBtn.addEventListener("click", (event) => {
    //console.log(event)
    if(!eventButtonActive)event.target.className = "click-btn red-button"
    else  event.target.className = "click-btn blue-button"; 
    
    eventButtonActive = !eventButtonActive;
    console.log(eventButtonActive)
});


/*  ======= mouse Possition  ======= */
let possitionX = 0;
let possitionY = 0;
const mousePossitionDisplay = document.querySelector("#mouse-possition-display");

document.addEventListener("mousemove", (e) => {
    ///console.log(e)
    possitionX = e.pageX;
    possitionY = e.pageY;

    mousePossitionDisplay.innerHTML = `X: ${possitionX} Y: ${possitionY}`;
});













/*  ======= data Target  ======= */
document.addEventListener("click", (e) => {
    let dataset = e.target.dataset["petName"];

    //console.log(dataset)
    switch(dataset){
        case "cat": 
            alert("Cat is here")
            break
        case "dog": 
            alert("Dog is here")
            break
        case "lama": 
            alert("Lama is here")
            break
        default:
            console.log("No dataset")
    }
})














/*  ======= user list  ======= */
const userListMain = document.querySelector("#user-list-main");
const userList = [
    {
        id: 1,
        name: "John"
    },{
        id: 2,
        name: "Sara"
    },{
        id: 3,
        name: "Bob"
    }
]
createUserList(userList)
function createUserList(list){
    for(let user of list){
        let userNeWList = creteElement({
            tagName: "li",
            userData: user
        });

        userListMain.appendChild(userNeWList)
    }
}
function creteElement(elementSettings){
    let newElement = document.createElement(elementSettings.tagName)
    newElement.setAttribute("data-user-list-data", elementSettings.userData.id)
    newElement.innerHTML = `${elementSettings.userData.name}`
    return newElement
}

document.addEventListener("click", (e) => {
    let dataset = e.target.dataset["userListData"];
    if(dataset){
        let currentUser = userList.find(user => {
            if(user.id == dataset) return user
        })
        if(currentUser) alert(`User name: ${currentUser.name} ID: ${currentUser.id}`)
    }
})
















/* 
    click,  - натиск
    mouseover,  - мишка над елементом
    mousemove - мишка рухається по елементу

    mouseenter - мишка заходить на елемент
    mouseleave - мишка покидає елемент

    dblclick - подвійного кліку
    mousedown - затискання кнопки 
    mouseup - відтискання кнопки мишки
*/
userListMain.addEventListener("mouseover", (e) => {
    console.log("mouseover")
})
userListMain.addEventListener("mousemove", (e) => {
    console.log("mousemove")
})
userListMain.addEventListener("mouseenter", (e) => {
    console.log("mouseenter")
})
userListMain.addEventListener("mouseleave", (e) => {
    console.log("mouseleave")
})
eventListenerBtn.addEventListener("dblclick", (e) => {
    console.log("dblclick")
})











/*  ======= keyboard  ======= */
const redBox = document.querySelector("#red-box");

const redBoxSettings = {
    xPosition: 0,
    yPosition: 0,
    speed: 5
}

document.addEventListener("keydown", (event) => {
    //console.log(event)
    
    switch(event["keyCode"]){
        case 38: 
            console.log("Move Up")
            redBoxSettings.yPosition -= redBoxSettings.speed;
            break
        case 39:
            console.log("Move Right")
            redBoxSettings.xPosition += redBoxSettings.speed;
            break
        case 40:
            console.log("Move Down")
            redBoxSettings.yPosition += redBoxSettings.speed;
            break
        case 37:
            console.log("Move Left")
            redBoxSettings.xPosition -= redBoxSettings.speed;
            break 
        default:
            break   
    }

    blockMove()
});


function blockMove(){
    redBox.style= `margin-top: ${redBoxSettings.yPosition}px;
    margin-left: ${redBoxSettings.xPosition}px;`
}












/*  ======= dots  ======= */

const boardData = {
    boardItems: [],
    selectors:{
        boardBody: document.querySelector("#board-body")
    } 
}

boardData.selectors.boardBody.addEventListener("click", (event) => {
    saveDotPosition(event, boardData)
    displayAllDots(boardData)
});



function saveDotPosition(event, boardData){
    
    let offsetTop = event.target.offsetTop;
    let offsetLeft = event.target.offsetLeft;

    let mousePosX =  event.pageX;
    let mousePosY =  event.pageY;


    console.log( mousePosX, mousePosY,  offsetLeft, offsetTop)
    boardData.boardItems.push({
        dotX: mousePosX - offsetLeft,
        dotY: mousePosY - offsetTop
    })
}

function displayAllDots(boardData) {
    let boardItems = boardData.boardItems;
    let boardBody = boardData.selectors.boardBody;
    ///console.log(boardBody)

    for(let dotData of boardItems){
        let newDot = createDot("div", "board-dot");

        newDot.style = `margin-top: ${dotData.dotY}px; 
        margin-left: ${dotData.dotX}px;`

        boardBody.appendChild(newDot)
    }
}

function createDot(tagName, styleClass, innerText) {
    const newElement = document.createElement(tagName);
    if(styleClass) newElement.className = styleClass;
    if(innerText) newElement.innerText = innerText;

    return newElement
}

