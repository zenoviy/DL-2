(function() {
    const appObject = {
        HOST: "http://127.0.0.1",
        PORT: 3500,
        selectors: {
            userList: document.querySelector("#user-list")
        },
        apiRoutes: {
            staticUsers: "static-users"
        },
        allUsers: []
    }

    init()
    function init() {
        let endpoint = appObject.apiRoutes.staticUsers
        let url = `${appObject.HOST}:${appObject.PORT}/${endpoint}`;

        serverRequests({ url })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            appObject.allUsers = data;
            displayUser({ 
                selectors: appObject.selectors,
                allUsers: appObject.allUsers
            })
        })
    }
   
    //  serverRequest(url, "post", {"Content-Type" : "application/json"}, JSON.stringify(formData))
    //  headers: headers ? headers : {"Content-Type" : "application/x-www-form-urlencoded"},
    //  credentials: "same-origin",
    function serverRequests(props) {
        return fetch(props.url, {
                method: props.method ? props.method : "get",
                body: props.data ? props.data : null
        })
    }

})()


function displayUser(props){
    for(let user of props.allUsers){
        let userCard = createElements({
            tagName: "li",
            styleClass: "user-card",
            innerText: `<span>${user.name}</span>`
        });

        props.selectors.userList.appendChild(userCard)
    }
}

function createElements(props) {
    const newElement = document.createElement(props.tagName);
    if(props.styleClass) newElement.className = props.styleClass;
    if(props.innerText) newElement.innerHTML = props.innerText;
    if(props.event) newElement.addEventListener("click", (e) => {
        props.event(e)
    });

    return newElement
}