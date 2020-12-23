console.log("Forms")


/*
    Input form logic
*/
const inputDisplayArea = document.querySelector("#input-display-area");

const userNameInput = document.querySelector("#user-name-input");
const citySelector = document.querySelector("#city-selector");

let nameInputState = {
    name: null,
    city: null
}

userNameInput.addEventListener("keyup", (event) => {
    console.log(event.target.value)
    nameInputState = {
        ...nameInputState,
        name: event.target.value
    }
    displayInputNameData()
});

citySelector.addEventListener("change", (event) => {
    console.log(event.target.value)
    nameInputState = {
        ...nameInputState,
        city: event.target.value
    }
    displayInputNameData()
});

function displayInputNameData(){
    let InputText = `
        <p>${ nameInputState.name ? nameInputState.name : "There is no name" }</p>
        <p>${ nameInputState.city ? nameInputState.city : "No city name" }</p>
    `;
    inputDisplayArea.innerHTML = InputText;
}




/*

    User list script

*/

const usersAppStorage = {
    allUsers: [],
    selectors: {
        userListArea: document.querySelector("#user-list-area"),
        userWalks: document.querySelector("#user-walks"),
        userWalksCount: document.querySelector("#user-walks-count"),
        mainForm: document.forms['userCreatorForm']
    }
}

usersAppStorage.selectors.userWalks.addEventListener("change", (e) => {
    console.log(e.target.value)
    displayUserWalks(usersAppStorage, e.target.value)
})

usersAppStorage.selectors.mainForm.addEventListener("submit", (event) => {
    event.preventDefault()
    initForm(event.target)
    event.target.reset()
})


displayUserWalks(usersAppStorage, usersAppStorage.selectors.userWalks.value)
function displayUserWalks(appStorage, value){
    appStorage.selectors.userWalksCount.innerText = `Walks count: ${value} steps`;
}

function initForm(form){
    let userObject = convertFormToData(form);
    addUserToDataBase(userObject, usersAppStorage);
    displayUserObjects(usersAppStorage)

}
function addUserToDataBase(userData, appStorage){
    appStorage.allUsers = appStorage.allUsers.concat(userData);
}

function convertFormToData(formElement){
    let objectFromInput = {};
    for(let input of formElement) {
        if(input.type === "radio" && !input.checked) continue

        if(input.name && input.value ) {
                objectFromInput[input.name] = input.value;
        }
    } 
    objectFromInput.id = new Date().getTime();  
    return objectFromInput
}


function displayUserObjects(appStorage){
    let userListArea = appStorage.selectors.userListArea;
    let allUsers = appStorage.allUsers;

    userListArea.innerHTML = "";
    for(let singleUser of allUsers) {
        let newUserList = createElements({
            tagName: "li",
            styleClasses: "list-classes user-list",
            innerText: `${singleUser.id} 
            User name: ${singleUser.userName}  
            password: ${singleUser.userEmail} 
            favorite car: ${singleUser.favoriteCar} 
            user Waslks: ${singleUser.userWalks}`
        });
        
        userListArea.appendChild(newUserList)
    }
    
}

function createElements(elementsData){
    const newElement = document.createElement(elementsData.tagName);

    if(elementsData.styleClasses) newElement.className = elementsData.styleClasses;
    if(elementsData.innerText) newElement.innerText = elementsData.innerText;
    return newElement
}







