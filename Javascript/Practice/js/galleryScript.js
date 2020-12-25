(function() {
    const timeScriptDB = [
            {
                id: 1,
                monthName: 'January',
                pictureUrl: 'https://www.woodstockvt.com/sites/default/files/styles/hero_x_large/public/media-images/snowmobiletrail.jpg',
                mainColor: '#2642A6',
                secondaryColor: '#1E3585'
            },
            {
                id: 2,
                monthName: 'February',
                pictureUrl: 'https://cdn.wallpapersafari.com/17/75/PCIihZ.jpg',
                mainColor: '#476582',
                secondaryColor: '#355597'
            },
            {
                id: 3,
                monthName: 'March',
                pictureUrl: 'https://cdn.pixabay.com/photo/2014/02/07/20/05/trail-261308__340.jpg',
                mainColor: '#629A97',
                secondaryColor: '#62B297'
            },
            {
                id: 4,
                monthName: 'April',
                pictureUrl: 'https://blog.siciliansecrets.it/wp-content/uploads/2019/04/aprile.jpg',
                mainColor: '#62D880',
                secondaryColor: '#36A652'
            },
            {
                id: 5,
                monthName: 'May',
                pictureUrl: 'https://mapio.net/images-p/73318689.jpg',
                mainColor: '#6BC75A',
                secondaryColor: '#3D9D2C'
            },
            {
                id: 6,
                monthName: 'June',
                pictureUrl: 'https://c.tadst.com/gfx/600x337/june-solstice-ten-things.jpg?1',
                mainColor: '#C4CF54',
                secondaryColor: '#9EB543'
            },
            {
                id: 7,
                monthName: 'July',
                pictureUrl: 'https://www.wallpaperup.com/uploads/wallpapers/2013/06/09/99967/8d26660573a64499063ba8912a04c540.jpg',
                mainColor: '#FDB73E',
                secondaryColor: '#DE7636'
            },
            {
                id: 8,
                monthName: 'August',
                pictureUrl: 'https://s2.best-wallpaper.net/wallpaper/1920x1200/1502/Sky-fields-harvest-machine_1920x1200.jpg',
                mainColor: '#D88B3E',
                secondaryColor: '#B57434'
            },
            {
                id: 9,
                monthName: 'September',
                pictureUrl: 'https://www.escape2poland.co.uk/poland-guide/wp-content/uploads/2016/10/jesie%C5%841.jpg',
                mainColor: '#E47D5F',
                secondaryColor: '#B5644B'
            },
            {
                id: 10,
                monthName: 'October',
                pictureUrl: 'https://i.pinimg.com/originals/c9/88/b5/c988b5621745c70b592c54326b720cc2.jpg',
                mainColor: '#B50056',
                secondaryColor: '#8E0045'
            },
            {
                id: 11,
                monthName: 'November',
                pictureUrl: 'https://images7.alphacoders.com/924/thumb-1920-924364.jpg',
                mainColor: '#5D46D0',
                secondaryColor: '#4836A0'
            },
            {
                id: 12,
                monthName: 'December',
                pictureUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/snow-covered-pine-trees-on-sunset-royalty-free-image-615101076-1541521490.jpg',
                mainColor: '#568BDB',
                secondaryColor: '#3F66A0'
            }
        ]
    
    const galleryDb = {
        currentImageIndex: 0,
        selectors: {
            pictureArea: document.querySelector("#picture-area"),
            body: document.querySelector("body"),
            timeArea: document.querySelector("#time-area")

        },
        galleryImages: [
            {
                id: 1,
                url: "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/07/new-york2.jpg",
                title: "city 1",
                description: "Description about the city 1"
            },{
                id: 2,
                url: "https://www.thebalancecareers.com/thmb/PsG0_bvGnJ-npJiq8RYiEO6WTT4=/3435x2576/smart/filters:no_upscale()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg",
                title: "city 1",
                description: "Description about the city 1"
            },{
                id: 3,
                url: "https://cdn.cnn.com/cnnnext/dam/assets/190910120101-04-shopping-cities-photos.jpg",
                title: "city 2",
                description: "Description about the city 3"
            }
        ]
    }
    displayImage( 
        galleryDb.galleryImages[galleryDb.currentImageIndex], 
        galleryDb.selectors.pictureArea 
    )

    document.addEventListener('click', (e) => {
        let datasetValue = e.target.dataset['galleryButton'];
        switch(datasetValue){
            case "left":
                console.log("left")
                changePictureId(-1, galleryDb)
                break
            case "right":
                console.log("right")
                changePictureId(1, galleryDb)
                break
        }
        displayImage( 
            galleryDb.galleryImages[galleryDb.currentImageIndex], 
            galleryDb.selectors.pictureArea 
        )
    })

    setInterval(() => { 
        imnitTimer(galleryDb, timeScriptDB)
     }, 1000);

    imnitTimer(galleryDb, timeScriptDB)
    function imnitTimer(mainAppDb, timeDB){
        let seasonDate = new Date();
        let year = seasonDate.getFullYear();
        let month = seasonDate.getMonth();
        let day = seasonDate.getDate();
        let hours = seasonDate.getHours();
        let minutes = seasonDate.getMinutes();
        let seconds = seasonDate.getSeconds();

        const currentMontObject = timeDB[month];
            ///console.log(currentMontObject)

        let timeString = `
            <h2>${year} ${currentMontObject.monthName}</h2>
            <h3 style="color: ${currentMontObject.mainColor};">${year}/${month+1}/${day}</h3>
            <h3 style="color: ${currentMontObject.secondaryColor};">${hours} ${seconds % 2 == 0 ? ':' : '&nbsp;'} ${minutes} ${seconds % 2 == 0 ? ':' : '&nbsp;'} ${seconds}</h3>
        `;
        assignTimeToPage(timeString, mainAppDb)
        changeSeason(currentMontObject, mainAppDb)
    }
})()



function changePictureId(indexValue, mainObject){
    mainObject.currentImageIndex += indexValue;
    let galleryLength = mainObject.galleryImages.length;

    if(mainObject.currentImageIndex >= galleryLength ){
        mainObject.currentImageIndex = 0;
    } 
    if(mainObject.currentImageIndex < 0){
        mainObject.currentImageIndex = galleryLength - 1;
    }
}


function displayImage(imageData, targetSelector){
    targetSelector.innerHTML = "";
    let newImage = createNewObject({
        tagName: 'img',
        styleClass: 'gallery-image'
    });
    let imageDescription =  createNewObject({
        tagName: 'div',
        styleClass: 'image-decscription',
        innerBody: `
            <h1>#${imageData.id} ${imageData.title}</h1>
            <p>${imageData.description}</p>
        `
    });

    newImage.src = imageData.url;
    targetSelector.appendChild(imageDescription)
    targetSelector.appendChild(newImage)
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


/* Display seasons  */

function assignTimeToPage(timeString, mainAppDb) {
    mainAppDb.selectors.timeArea.innerHTML = timeString;
}
function changeSeason(currentMontObject, mainAppDb){
    mainAppDb.selectors.body.style = `background-image: url(${currentMontObject.pictureUrl})`;
}
