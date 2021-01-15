
const PHOTO_API = "https://jsonplaceholder.typicode.com/photos";




/*getPhotos(PHOTO_API)
function getPhotos(url){
    let xmlRequest = new XMLHttpRequest();

    xmlRequest.addEventListener("load", (response) => {
        let photosRaw = xmlRequest.responseText;
        let photosObject = JSON.parse(photosRaw);
        console.log(photosObject)
        for(let photo of photosObject) {
            document.write( `  <h4>${photo.title}</h4> <img width="100" src=${photo.url}>`)
        }
    });
    xmlRequest.open("GET", url);

    xmlRequest.send();
}*/
/*
console.log(1)
let photos = fetchPhotos(PHOTO_API)
photos.then(resolve => {
    console.log(2)
    console.log(resolve)
}, reject => {
    console.log(reject.err, reject.text)
})
console.log(3)
function fetchPhotos(url){
    return new Promise((resolve, reject) => {
        console.log(4)
       fetchData(url)
       .then(data => data.json())
       .then(data => resolve(data))
       .catch(err => reject({err, text: "Error has been occured"}));
    })
    
    /*photosRes.then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))*/
/*}

function fetchData(url){
    console.log(5)
    return fetch(url)
}

console.log(6)*/