console.log("extract data")

const singlePageData = {
    data: null
}

const displayArea = document.querySelector("#display-area");
const pageBody = document.querySelector("body");

getUrlData()
displayFormData()
function getUrlData(){
    console.log(location)
    //let url = new URL(location.href);
    let search = new URLSearchParams(location.search)
    let searchObject = {}

    for(let [key, val] of search.entries()){
        searchObject[key] = val;
    } 
    singlePageData.data = searchObject;
}

function displayFormData(){

    let timeData = singlePageData.data.timeData.replaceAll("-", "/")
    let resultText = `
        <h2>Hello ${singlePageData.data.userName} </h2>
        <p>Age: ${singlePageData.data.userAge} years old</p>
        <p>${timeData}</p>
        <h4>Uaser message</h4>
        <hr>
        <p>${singlePageData.data.textareaValue}</p>
    `;

    pageBody.style=`background-color: ${singlePageData.data.userColor};`
    displayArea.innerHTML = resultText;
}

