(function() {
    const appObject = {
        HOST: "http://127.0.0.1",
        PORT: 3500,
        selectors: {
            userList: document.querySelector("#user-list"),
            mainUserForm: document.forms["main-user-form"]
        },
        apiRoutes: {
            staticUsers: "static-users",
            appUsers: "api/app-users"
        },
        allUsers: []
    }

    init()
    function init() {
        let endpoint = appObject.apiRoutes.appUsers
        let url = `${appObject.HOST}:${appObject.PORT}/${endpoint}`;

        serverRequests({ url })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            appObject.allUsers = data.body;
            displayUser({ 
                selectors: appObject.selectors,
                allUsers: appObject.allUsers
            })
        })
    }


    appObject.selectors.mainUserForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const convertData = convertFormData({form : e.target });
        let endpoint = appObject.apiRoutes.appUsers;
        let url = `${appObject.HOST}:${appObject.PORT}/${endpoint}`;
        serverRequests({
            url,
            method: "POST",
            data: JSON.stringify(convertData),
            headers: {"Content-Type" : "application/json"}
        }).then(data => data.json())
        .then(data => {
            console.log(data)
            init()
        } )
    });



    function convertFormData(props) {
        const form = props.form;
        let convertData = {};
        for(let input of form) {
            if(input.name && input.value) {
                convertData[input.name] = input.value;
            }
        }
        return convertData
    }
   
    //  serverRequest(url, "post", {"Content-Type" : "application/json"}, JSON.stringify(formData))
    //  headers: headers ? headers : {"Content-Type" : "application/x-www-form-urlencoded"},
    //  credentials: "same-origin",
    function serverRequests(props) {
        if(props.data) console.log(props.data, props.headers)
        return fetch(props.url, {
                headers: props.headers? props.headers : {"Content-Type" : "application/x-www-form-urlencoded"},
                method: props.method ? props.method : "get",
                body: props.data ? props.data : null
        })
    }

    function deleteUser(props) {
        const id = props.id;
        const appObject = props.appObject;
        let endpoint = appObject.apiRoutes.appUsers;
        let url = `${appObject.HOST}:${appObject.PORT}/${endpoint}`;
        serverRequests({
            url,
            method: "DELETE",
            headers: {"user-id" : id}
        }).then(data => data.json())
        .then(data => {
            console.log(data)
            init()
        })
    }


    function displayUser(props){
        props.selectors.userList.innerHTML = "";
        for(let user of props.allUsers){
            let userCard = createElements({
                tagName: "li",
                styleClass: "user-card",
                innerText: `<span>${user.name}</span>`
            });
            let buttonDelete = createElements({
                tagName: "button",
                styleClass: "btn red-btn",
                innerText: "Delete",
                event: (e) => {
                    console.log(user.id)
                    if(confirm(`Delete thi user name: ${user.name}?`)){
                        deleteUser({
                            id: user.id,
                            appObject,
                        })
                    }
                } 
            })
            userCard.appendChild(buttonDelete)
            props.selectors.userList.appendChild(userCard)
        }
    }
})()






function createElements(props) {
    const newElement = document.createElement(props.tagName);
    if(props.styleClass) newElement.className = props.styleClass;
    if(props.innerText) newElement.innerHTML = props.innerText;
    if(props.event) newElement.addEventListener("click", (e) => {
        props.event(e)
    });

    return newElement
}