console.log("DOM")

/*
    DOM Document Object Model
    #  id - для окремого елементу
    .class - для групи
    tag  - для тегів
*/

/* ===================== Index ========================== */
const mainBoxElement = document.getElementById("main-box");

let boxText = mainBoxElement.innerText;
let boxClasses = mainBoxElement.className;
// .innerText  .className   .style   .innerHTML  .classList  .toggle 
//console.dir(mainBoxElement, boxText, boxClasses)

//alert(1)

mainBoxElement.innerText = 'Hello DOM';
//alert(2)
mainBoxElement.className = 'box blue-box';
//alert(3)
// large-box 
mainBoxElement.classList.add('large-box');
mainBoxElement.classList.remove('box');
//alert('Fin')

let text = 'Document InnerHTML';
let imageSource = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg';
mainBoxElement.innerHTML = `
    <h2>${text}</h2>
    <hr>
    <img src=${imageSource} width="100">
`;
//alert(1)
mainBoxElement.classList.toggle('green-box')
//alert(1)
mainBoxElement.classList.toggle('green-box')
//alert(1)
mainBoxElement.classList.toggle('green-box')


/* ===================== Class ============ */

const mainListElements = document.getElementsByClassName("main-list");
const listItemElements = document.getElementsByClassName("list-item");

// list-item-style

//console.dir(mainListElements[0], listItemElements)
//listItemElements.classList.add("list-item-style")

let index = 0;
for(let listItem of listItemElements){
    console.log(listItem)
    if(index % 2 === 0 ) {
        listItem.classList.add("list-item-style");
    } else {
        listItem.classList.add("list-item-style-dark");
    }
    index += 1;
}


for(let i = 0; i < mainListElements[0].children.length; i++){
    console.log(mainListElements[0].children[i])

    mainListElements[0].children[i].firstChild.innerText = `Item № ${i + 1}`;
}
// list-item-style-dark


/*======================== Tag name ==========================*/
const allDocumentSpans = document.getElementsByTagName('span');
console.log(allDocumentSpans)

// green-box

for(let spanElement of allDocumentSpans){
    spanElement.classList.add("green-box");
}



/* ============================= Query Selector =============================== */

const redBoxElement = document.querySelector("#red-box");

console.log(redBoxElement)

const listItemQuery = document.querySelectorAll(".list-item");
console.log(listItemQuery, [...listItemQuery])

for(let listItem of [...listItemQuery]) {
    listItem.style= "border: 2px solid red;";

}

/* =============================== Box animation =============================== */
let boxSettings = {
    redBoxElement: redBoxElement,
    boxMinWidth: 50,
    boxMaxWidth: 100,
    rightCornerEnd: window.innerWidth,
    leftCornerEnd: 0,
    bottomCornerEnd: window.innerHeight,
    topCornerEnd: 0,
    boxExactSet: {
        changeSizehorizontal: 'to-the-right',
        width: 50,
        height: 50,
        xPosition: 0,
        yPosition: 0,
        horizontalDirection: 'right',
        verticalDirection: 'bottom'
    }
}

let boxInterval = setInterval(function(){
    initAnimation(boxSettings);
    // clearInterval(boxInterval);
}, 1);

function initAnimation(mainObject){
    changeBoxSize(mainObject)
    boxMove(mainObject)
    assignStyleToTheBlock(mainObject)
}


function boxMove(mainObject){
    let horizontalDirection = mainObject.boxExactSet.horizontalDirection;
    let verticalDirection = mainObject.boxExactSet.verticalDirection;
    let xPosition = mainObject.boxExactSet.xPosition;
    let yPosition = mainObject.boxExactSet.yPosition;
    let width = mainObject.boxExactSet.width;
    let height = mainObject.boxExactSet.height;
    
    /* left - right */ 
    if(xPosition <= mainObject.rightCornerEnd - width && horizontalDirection === 'right'){
        mainObject.boxExactSet.xPosition += 1;
        if(xPosition >= mainObject.rightCornerEnd - width){
            console.log(horizontalDirection)
            mainObject.boxExactSet.horizontalDirection = 'left';
        }
    } else if(xPosition >= mainObject.leftCornerEnd && horizontalDirection === 'left'){
        mainObject.boxExactSet.xPosition -= 1;
        if(xPosition <= mainObject.leftCornerEnd){
            mainObject.boxExactSet.horizontalDirection = 'right';
        }
    }

     /* top - bottom */ 
    // console.log(yPosition, mainObject.bottomCornerEnd, height, verticalDirection)
    //alert(1)
    if(yPosition <= mainObject.bottomCornerEnd - height && verticalDirection === 'bottom'){
        mainObject.boxExactSet.yPosition += 1;
        
        if(yPosition >= mainObject.bottomCornerEnd - height){

            mainObject.boxExactSet.verticalDirection = 'top';
        }
    } else if(yPosition >= mainObject.topCornerEnd && verticalDirection === 'top'){
        mainObject.boxExactSet.yPosition -= 1;
        if(yPosition <= mainObject.topCornerEnd){
            mainObject.boxExactSet.verticalDirection = 'bottom';
        }
    }

}


function changeBoxSize(mainObject){
    let changeSizehorizontal = mainObject.boxExactSet.changeSizehorizontal;

    if(mainObject.boxExactSet.width < mainObject.boxMaxWidth && changeSizehorizontal === 'to-the-right') {
        mainObject.boxExactSet.width += 1;
        if(mainObject.boxExactSet.width >= mainObject.boxMaxWidth) {
            mainObject.boxExactSet.changeSizehorizontal = 'to-the-left';
        }
    } else if (mainObject.boxExactSet.width > mainObject.boxMinWidth && changeSizehorizontal === 'to-the-left'){
        mainObject.boxExactSet.width -= 1;
        if(mainObject.boxExactSet.width <= mainObject.boxMinWidth) {
            mainObject.boxExactSet.changeSizehorizontal = 'to-the-right';
        }
    }
}

function assignStyleToTheBlock(mainObject){
    let redBoxElement = mainObject.redBoxElement;
    let boxWidth = mainObject.boxExactSet.width;

    let xPosition = mainObject.boxExactSet.xPosition;
    let yPosition = mainObject.boxExactSet.yPosition; 

    redBoxElement.style = `
        width: ${boxWidth}px;
        margin-top: ${yPosition}px;
        margin-left: ${xPosition}px;
    `;
}



/*  =======  Rendering list  ======= */

let localUserList = [{
    id: 1,
    name: 'John',
    mail: 'gohn@mail.com',
    pictureUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'
}, {
    id: 2,
    name: 'Bob',
    mail: 'bob@mail.com',
    pictureUrl: 'https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-9.png'
}, {
    id: 3,
    name: 'Sara',
    mail: 'sara@mail.com',
    pictureUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png'
}, {
    id: 4,
    name: 'Samuel',
    mail: 'sam@mail.com',
    pictureUrl: 'https://kr-rada.gov.ua/site/uploads/ckfinder/Icons/img2.png'
}];

initUserRender(localUserList)

function initUserRender(userList) {
    let mainUserList = document.querySelector('#main-user-list');
    for(let user of userList){
        let innerHtml = `
            <h3><span>${user.id}</span> ${user.name}</h3>
            <p>${user.mail}</p>
            <img src=${user.pictureUrl} alt=${user.name}>
        `

        let newUserList = generateNewElement(
            'li', 
            'user-single-list list-item-style', 
            innerHtml, 
            'background: green; color: #fff; text-align: center;'
        )
        dispalyUsers(mainUserList, newUserList)
    }
}

function dispalyUsers(target, content){
    target.appendChild(content);
}
 // 'background: green; color: '
function generateNewElement(tagName, styleClass, innerHtml, attributeStyle) {
    const newElement = document.createElement(tagName);
    if(styleClass) newElement.className = styleClass;
    if(innerHtml) newElement.innerHTML = innerHtml;
    if(attributeStyle) newElement.setAttribute('style', attributeStyle);

    return newElement
}



