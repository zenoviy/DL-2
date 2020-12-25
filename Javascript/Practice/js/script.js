
(function() {
    const APP_DB = {
        allUsers: [],
        currentUserAvatar: '',
        selectors: {
            mainUserForm: document.forms['mainUserForm'],
            userDisplaArea: document.querySelector('#user-displa-area'),
            avatarIcon: document.querySelector("#avatar-icon"),
            avatarInput: document.querySelector("#avatar-input")
        }
    }


    function showAvatar(file, targetImage){
        pictureBaseIncription(file)
        .then(res => {
            APP_DB.currentUserAvatar = res;
            targetImage.src=res;
        })
    }
    APP_DB.selectors.avatarInput.addEventListener('change', (e) => {
        e.preventDefault()
        showAvatar(e.target.files[0], APP_DB.selectors.avatarIcon)
    })

    APP_DB.selectors.mainUserForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let currentNewUser = convertFormDataToOBject(e.target, APP_DB.currentUserAvatar);
        e.target.reset()
        addUserToDataBase(APP_DB, currentNewUser)
        displayUserProcess(APP_DB, APP_DB.selectors.userDisplaArea)
    })
})()


function convertFormDataToOBject(inputsData, avatar) {
    let userObject = {};
    for(let input of inputsData){
        if(input.name && input.value) {
            userObject[input.name] = input.value;
        }
    }
    userObject.id = new Date().getTime();
    userObject.userPicture = avatar ? avatar : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';
    return userObject
}
function pictureBaseIncription(file){
    return new Promise((resolve, reject) => {
        var reader  = new FileReader();
        reader.addEventListener('load', () => {
            resolve(reader.result)
        })
        if(file) {
            reader.readAsDataURL(file);
        }  
    })
}



/* Display users */

function addUserToDataBase(database, user){
    database.allUsers = database.allUsers.concat(user)
}

function displayUserProcess(mainObjectDb, selector){
    selector.innerHTML = '';
    
    for(let singleUser of mainObjectDb.allUsers) {
        let userTime = new Date(singleUser.id);
        let year = userTime.getFullYear();
        let month = userTime.getMonth() + 1;
        let day = userTime.getDate();
        let hours = userTime.getHours();
        let minutes = userTime.getMinutes();

        let userBody = `
        <div style="color: ${singleUser.userColor};">
            <img width=50 src=${singleUser.userPicture}>
            <span> Name: ${singleUser.userName} </span>
            <span> Email: ${singleUser.userEmail} </span>
            <span> Create: ${year}/${month}/${day}   ${hours}:${minutes}</span>
        </div>
        `;

        let userCard = createNewObject({
            tagName: 'li',
            styleClass: 'user-card',
            innerBody: userBody
        });

        let delateBtn = createNewObject({
            tagName: 'button',
            styleClass: 'delate-btn',
            innerBody: 'delate'
        }, (e) => {
            if(confirm(`Delete user: ${singleUser.userName} ? `)){
                deleteUser({
                    id: singleUser.id,
                    mainObjectDb
                });
                displayUserProcess(mainObjectDb, selector);
            }
            
        })

        userCard.appendChild(delateBtn)
        selector.appendChild(userCard)
    }
}

function createNewObject(objectProps, event){
    const newElement = document.createElement(objectProps.tagName);
    if(objectProps.styleClass) newElement.className = objectProps.styleClass;
    if(objectProps.innerBody) newElement.innerHTML = objectProps.innerBody;

    if(event) newElement.addEventListener('click', (e) => {
        event(e)
    });
    return newElement
}


function deleteUser(targetObject){
    let id = targetObject.id;
    let targetIUser = targetObject.mainObjectDb.allUsers.find(user => user.id === id);
    let userId = targetObject.mainObjectDb.allUsers.indexOf(targetIUser);
    targetObject.mainObjectDb.allUsers.splice(userId, 1);
}   


