console.log("Objects");


/*

    Objects - тип дани   структура - дерево
    Дерево - графи 

    ключ і значення
    до ключа можна звіернутись і отримати значення
    значення - містять любі типи даних
    значення яке містить функцію називається методом

    Object    -  прототипи 

    на об'єктах можна формувати власні конструктори

*/


const myFirstObject = {
    id : 1,
    userName : "John",
    age : 23
};

//console.log(myFirstObject)
//console.log( myFirstObject.userName  )
//console.log( myFirstObject['userName']  )

let userSingleObject = {
    id: 2,
    name: "Jack",
    age: 30,
    detail: {
        currentLocation: "New York",
        street: "Washington st.",
        job: {
            company: "MIT",
            position: "developer",
            sallery: 3000,
            status: "Junior",
            responsebility: {
                daylyTask: ["Coffy break", "Fix some bug", "Commit fixed code"],
                primeryTask: ["make code work"]
            },
            promoteUser(promoteInformation){
                console.log(this.status)
                let status = promoteInformation.status;
                let sallery = promoteInformation.sallery;
                let responsebility = promoteInformation.responsebility;

                this['status'] = status;
                this['sallery'] = sallery;
                this['responsebility'] = responsebility;
            }
        }
    },
    greatingsForUser: function() {
        let greatingsText = `Hello ${this.name}`;
        document.write(greatingsText)
    },
    showDetailInformation(){
        let detailText = `UserName is: ${this.name} he is ${this.age}year old`;
        this.greatingsForUser()
        document.write(detailText)
    },

    showUserWorkStatus(){
        let text = `${this.name} work at possiton ${this.detail.job.status} ${this.detail.job.position} 
        sallary:  ${this.detail.job.sallery}$ responsebility: Dayly: ${this.detail.job.responsebility.daylyTask.join(" || ")} 
        Main: ${this.detail.job.responsebility.primeryTask.join(" || ")}`;
        document.write(text)
    }
}




userSingleObject.name = "Tommy";
//console.log( userSingleObject )

let jackCompany = userSingleObject.detail.job.company;
//console.log("Jack company", jackCompany)


userSingleObject.showUserWorkStatus()

//alert("User Before promotion")
userSingleObject.detail.job.promoteUser({
    status: "Middle",
    sallery: 5000,
    responsebility: {
        daylyTask: ["Create simple program architecture", "Write flexible code"],
        primeryTask: ["Speak with Steakholders"]
    },
})

///alert("User After promotion")

userSingleObject.showUserWorkStatus()


let extraData = {
    houseSize: "Big",
    favoriteCar: "BMW",
    favoriteGame: "Cyberpunk"
}

userSingleObject = { ...userSingleObject,  ...extraData };

//console.log(userSingleObject, " Join two object", userSingleObject.favoriteGame)


let superExtrainfo = {
    homePets: {
        animal : {
            name: "Wolfy",
            speac: "Dog",
            age: 3,
            says: "Woof",
            petSays(){
                console.log(`${this.speac} ${this.name} says: ${this.says}`)
            }
        },
    }
}

userSingleObject = Object.assign({}, userSingleObject, superExtrainfo);

//console.log(userSingleObject)
userSingleObject.homePets.animal.petSays();


let createFromObject = Object.create(Array.prototype)
console.log(createFromObject);


let definePropObj = {
    name: "asd",
    age: 23,
    place: "USA"
}

Object.defineProperty(definePropObj, "name", {
    value: "Sara",
    writable: false,
    enumerable: false
});

definePropObj.name = "John";
//console.log(definePropObj, Object.getOwnPropertyDescriptor(definePropObj, "name"));


Object.defineProperties(definePropObj, {
    place: {
        value: "Europe",
        writable: false
    },
    work: {
        value: {
            company: "Google",
            position: "Business dev"
        },
        writable: false
    },
    random: {
        value: "random"
    }
})

//console.log(definePropObj)

for(let objItem in definePropObj){
    //console.log(objItem, definePropObj[objItem])
}

let entriesValue = Object.entries(definePropObj);
//console.log(entriesValue, " < Entries")

let [ first, second ] = [123, 45, 78];
//console.log(first, second, " unpacking array ");

let { cat, dog, car } = { cat: "Meauwits", dog: "Wolfy", car: "BMD"};
    //console.log(cat, dog, car, " unpacking Object ")

for(let [key, value] of Object.entries(definePropObj)){
    //console.log(key, value)
}


let frozenObject = {
    name: "Frozenarium"
}
frozenObject.location = "Earth";
console.log(  Object.isFrozen(frozenObject), frozenObject )

Object.freeze(frozenObject);
frozenObject.age = 34;
frozenObject.name = "Chengarium";
//console.log(  Object.isFrozen(frozenObject),  frozenObject)



let sealedObject = {
    name: "SAealed",
    datails: {
        size: "large",
        color: "red"
    }
}
sealedObject.location = "Ocean";
//console.log(  Object.isSealed(sealedObject), sealedObject )

Object.seal(sealedObject)

sealedObject.location = "Land";
sealedObject.age = 44;
//console.log(  Object.isSealed(sealedObject), sealedObject )


//console.log(Object.keys(sealedObject), "Всі ключі")
//console.log(Object.values(sealedObject), "Всі властивості ключів")


//console.log(Object.keys(sealedObject.datails), "Всі ключі в деталях")
//console.log(Object.values(sealedObject.datails), "Всі властивості ключів в деталях")



/*  =====   Обхід об'єкта  =====   userSingleObject */

console.log("============ Обхід об'єкта ===============")
runingAcrossObject(userSingleObject)

function runingAcrossObject(obj) {
    for(let [key, value] of Object.entries(obj)){
        if(key && value){
            console.log(key, value)
            if(value instanceof Object && (!value.length && value.length != 0 )){
                runingAcrossObject(value)
            }
        } 
    }
}



/*  ===============  Конструктор  =============== */

/*
    сервер де є зареєстровані юзери
    ми маємо переглянути їхню інформацю за дорпмогою JS
*/

console.log("============== Конструктор Function =====================")



const usersFromServer = [
    {
        userName: "Jack",
        email: "jsck.office@com.en"
    }, {
        userName: "Cayla",
        email: "cayla.office@com.en"
    }, {
        userName: "Max",
        email: "max.office@com.en"
    }
];


function CreateUser(curruntData) {
    this.employeeName = curruntData.userName;
    this.employeeEmail = curruntData.email;
    this.company = curruntData.company

    this.showEmployeeName = function() {
        console.log(this.employeeName)
    }
}
CreateUser.prototype.showUserDetailInfo = function() {
    console.log(`Name: ${this.employeeName} Email: ${this.employeeEmail}`)
    document.write(`|| Name: ${this.employeeName} Email: ${this.employeeEmail}`)
}


let userX = new CreateUser({
    userName: "X-man",
    email: "asdsx_man@.com.c",
    company: "School"
});

console.log(userX)
let alllocalUser = [];

for(let user of usersFromServer) {
    let newUser = new CreateUser({
        userName: user.userName,
        email: user.email,
        company: "School"
    });
    newUser.showUserDetailInfo()
    alllocalUser.push(newUser)
}


/* =========================  Class  ====================== */


class CreatorOfUser {
    constructor(props){
        this.employeeName = props.userName;
        this.employeeEmail = props.email;
        this.company = props.company
    }
    showEmployeeName() {
        console.log(this.employeeName)
    }
    get showUserEmail(){
        console.log(this.employeeEmail)
    }
    set setUserEmail(newEmail){
        this.employeeEmail = newEmail;
    }
}

CreatorOfUser.prototype.showUserDetailInfo = function() {
    console.log(`Name: ${this.employeeName} Email: ${this.employeeEmail}`)
    document.write(`|| Name: ${this.employeeName} Email: ${this.employeeEmail}`)
}


let userByConstructor = new CreatorOfUser({
    userName: "Y-man",
    email: "asdsy_man@.com.c",
    company: "School"
});

userByConstructor.showEmployeeName()

userByConstructor.showUserEmail;
userByConstructor.setUserEmail = "new-yman-mail@com.y";
userByConstructor.showUserEmail;


/*============ Class extends */

class CompanyUserOperation extends CreatorOfUser {
    constructor(props){
        super(props)
        this.mainTask = props.mainTask;
        this.possition = props.possition;
    }
    showPossitionAndTask() {
        let text = `Employee: ${this.employeeName} he is ${this.possition} Task is ${this.mainTask} `;
        console.log(text)
    }
}

const officeWorker = new CompanyUserOperation({
    userName: "Freeman",
    email: "gordon@com.bm",
    company: "Black Massa",
    possition: " Lead Scientist",
    mainTask: "Reasearch of exotic matterials"
});

officeWorker.showPossitionAndTask()

/* call bind apply */

console.log("========== Call bind apply ======")

const obj1 = {
    name: "Terry"
}
const obj2 = {
    name: "Luccy"
}

function showUserName(greatingsWord){
    let greatingsText = `${greatingsWord} for you ${this.name}`;
    console.log(greatingsText)
}


showUserName.call(obj1, "Hello there");
showUserName.call(obj2, "Hi");
