(function() {
    const newsAppData = {
        selectors: {
            mainNewsBackground: document.querySelector("#main-news-background"),
            mainNewsArea: document.querySelector("#main-news-area"),
            newsPhotoArea: document.querySelector("#news-photo-area"),
            searchSol: document.querySelector("#search-sol")
        },
        marsPhotos: [],
        correntNumberOfPhotos: 8,
        photosToLoad: 8,
        currentSol: 1000,
        API_KEY: "EHjkmqZNbtm8BGKksaJterFHyGuaxEx0o7ub6cpW",
        apiLinks: {
            HOST: "https://api.nasa.gov",
            APOD: "/planetary/apod",
            MARS_PHOTO: "/mars-photos/api/v1/rovers/curiosity/photos"
        }
    }

    getSingleNews(newsAppData)
    function getSingleNews(props){
        let url = `${props.apiLinks.HOST}${props.apiLinks.APOD}?api_key=${props.API_KEY}`;
        console.log(url)
        getServerData({ url })
        .then(data => data.json())
        .then(news => {
            console.log(news)
            displaySingleNews({news, appData: props})
        })
        .catch(err => console.error(err))
    }
    getMarsPhotos({
        appData: newsAppData,
        camera: "MAST",
        sol: newsAppData.currentSol
    })
    function getMarsPhotos(props) {
        let url = `${props.appData.apiLinks.HOST}${props.appData.apiLinks.MARS_PHOTO}?camera=${props.camera}&sol=${props.sol}&api_key=${props.appData.API_KEY}`;
        console.log(url)
        getServerData({ url })
        .then(data => data.json())
        .then(result => {

            props.appData.marsPhotos = result.photos;
            showMarsPhotos({appData: props.appData})
        })
        .catch(err => console.error(err))
    }


    function getServerData(props){
        return fetch(props.url)
    }



    document.addEventListener("click", (e) => {
        let dataset = e.target.dataset;
        switch(dataset["newsBtn"]){
            case "show-more":
                newsAppData.correntNumberOfPhotos += newsAppData.photosToLoad;
                showMarsPhotos({appData: newsAppData})
                break
            case "search-photo":
                getMarsPhotos({
                    appData: newsAppData,
                    camera: "MAST",
                    sol: newsAppData.currentSol
                })
                break
        }
    });
    newsAppData.selectors.searchSol.value = newsAppData.currentSol;
    newsAppData.selectors.searchSol.addEventListener("keyup", (e) => {
        console.log(e.target.value)
        newsAppData.currentSol = e.target.value
    });
    newsAppData.selectors.searchSol.addEventListener("change", (e) => {
        console.log(e.target.value)
        newsAppData.currentSol = e.target.value
    });
})()




function displaySingleNews(props){
    let news = props.news;
    let selectors = props.appData.selectors;
    if(!news) return
    
    selectors.mainNewsBackground.style=`background-image: url(${news.url});`;
    let mainNews = createElements({
        tagName: "div",
        className: "main-news-wrapper",
        innerHtml: `
        <div class="media-area p-2">
            <img src=${news.url} alt=${news.title}> 
        </div>
        <div class="description-area p-2">
            <h1>${news.title}</h1>
            <date>${news.date.replaceAll("-", "/")}</date>
            <p>${news.explanation}</p>
        </div>
        `
    });
    selectors.mainNewsArea.appendChild(mainNews)
}


function showMarsPhotos(props) {
    let photos = props.appData.marsPhotos;
    let photoToShow = photos.slice(0, props.appData.correntNumberOfPhotos);
    let selectors = props.appData.selectors;
    selectors.newsPhotoArea.innerHTML = "";
    for(let photo of photoToShow){
        let photoCard = createElements({
            tagName: "div",
            className: "col photo-card",
            innerHtml: `
                <div class="card card-main-wrapper" >
                    <img src="${photo.img_src}" class="card-img-top" alt="${photo.id}">
                    <div class="card-body">
                    <h5 class="card-title">${photo.id} ${photo.rover.name}</h5>
                    <p class="card-text"> ${photo.rover.name} ${photo.camera.full_name} Sol ${photo.sol}</p>
                    </div>
                </div>
            ` 
        });
        let linkButton = createElements({
            tagName: "button",
            className: "btn btn-success photo-btn",
            innerHtml: `Wisit photo # ${photo.id}`,
            event: (e) => {
                e.preventDefault()
                if(confirm(`Do you want to wisit photo # ${photo.id}`)){
                    location.href = `./singlePhotos.html?id=${photo.id}&cameraName=${photo.camera.name}&sol=${photo.sol}`
                }
                
            }
        })

        photoCard.appendChild(linkButton);
        selectors.newsPhotoArea.appendChild(photoCard);
    }
    
}

function createElements(props) {
    let newElement = document.createElement(props.tagName);
    if(props.className) newElement.className = props.className;
    if(props.innerHtml) newElement.innerHTML = props.innerHtml;

    if(props.event) newElement.addEventListener("click", (e) => {
        props.event(e)
    })
    return newElement
}