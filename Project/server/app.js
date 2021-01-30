/*
    пишемо сервер з архітектурою REST API 
    використовуємо фреймворк Express
*/
const http = require('http');
const express = require('express');
const path = require('path');

const cors = require('cors');
const os = require('os');
const fs = require('fs');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');


const getUSers = require('./business/getUsers').getUSers;
const postUsers = require('./business/postUsers').postUsers;
const deleteUser = require('./business/delateUsers').deleteUser;

process.env.HOST = '127.0.0.1';
process.env.PORT = '3500';

const app = express();
const hbs = exphbs.create({
    extname: '.handlebars',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main.handlebars'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/hbs-home", express.static(path.join(__dirname + '/public/hbs-style')));
app.get('/hbs-home', (req, res) => {
    res.render('home', {
        title: 'home page',
        id: 12,
        footerType: true
    })
})
app.use("/hbs-about", express.static(path.join(__dirname + '/public/hbs-style')));
app.use("/hbs-about", express.static(path.join(__dirname + '/public/hbs-script')));
app.get('/hbs-about', (req, res) => {
    const userDataLink = path.join(__dirname +'/public/db');
    if(fs.existsSync(userDataLink + '/userData.json')){ 
       fs.readFile(userDataLink + '/userData.json', (err, data) => { 
            let pageData = {
                title: 'about',
                userData: JSON.parse(data),
                footerType: false
            }
            return res.render('about', pageData)
        })
    } else {
       res.render('about', { 
            title: 'about',
            userData: [],
            footerType: false
        }) 
    }
    
})

/*
    Роутер привязка до домашньої сторінки http://localhost:3500/ 
    привязуємо локальну папку для використання статичних файлів
*/
app.use("/", express.static(path.join(__dirname + '/public/page')));
app.get("/",  (req, res) => {
    console.log(os.hostname())
    let link = path.join(__dirname, "/public/page/index.html");
    res.sendFile(link);
});/**/


/*
    Запит на читання з локального документа staticUsers.json
    і відправлення даних http://localhost:3500/static-users
*/
app.get("/static-users", cors(), (req, res) => {
    let userDataLink = path.join(__dirname + '/public/db/staticUsers.json');
    console.log(userDataLink, fs.existsSync(userDataLink))
    if(fs.existsSync(userDataLink)){
        fs.readFile(userDataLink, (err, data) => {
            if(err) return console.log(err); 

            console.log(data)
            let fileWithUserts = JSON.parse(data);
            res.setHeader('Content-type', 'application/json')
            return res.send(fileWithUserts)
        })
    }else {
        res.send("response empty")
    }
});


/*
    CRUD методи добавляє юзерів з клієнта і зберігає в файл .json 
*/
app.use("/api/app-users", cors());
app.use("/api/app-users", express.static(path.join(__dirname + '/public/db')));

app.route("/api/app-users")
    .get( getUSers)
    .post(bodyParser.json(), postUsers)
    .delete( deleteUser)


app.use("/get-product", cors());
app.use( express.static(path.join(__dirname + '/public')));
app.get("/get-product", (req, res) => {
    const userDataLink = path.join(__dirname +'/public/db');
    if(!fs.existsSync(userDataLink + '/product.json')){ 
        return res.send({text: "No users at this moment!"})
    };
    fs.readFile(userDataLink + '/product.json', (err, data) => { 
        if(err) return res.send({text: err})

        const productData = JSON.parse(data);
        res.setHeader('Content-type', 'application/json');
        res.status(200).send(JSON.stringify({dataBody: productData}));
    });
});    
/*
app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>")
});
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
});
app.get("/about/contacts", (req, res) => {
    res.send("<h1>About Contacts Page</h1>")
});*/


/*
    Цей закоменчений код запускає збілджену версію додатку
    по localhost:3500  можна бе попасти в додаток
*/
/*
app.use(express.static(path.join(__dirname, "public/www/dl-angular-app")));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "/public/www/dl-angular-app", "index.html"));
});
*/


app.listen(process.env.PORT, () => {
    console.log(`App is running at ${process.env.HOST}  Port: ${process.env.PORT}`)
})


/*
// NodeJS приклад без додаткових фреймворків

const app_old = http.createServer((req, resp) => {
    if(req.method === "GET"){
        let object = [
            {
                id: 10,
                city : "Lviv"},
            {
                id: 11,
                city : "New York"},
            {
                id: 12,
                city : "London"}
        ];

        let requestId = req.url.split("=")[1];
        if(requestId > -1) {
            let searchObject = object.find(d => d.id == requestId)
            if(searchObject) {
                resp.setHeader('Content-type', 'application/json');
                return resp.end(JSON.stringify(searchObject))
            } else {
                resp.setHeader('Content-type', 'text/plain');
                return resp.end("I cant find the city")
            }
        } 
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(object))
    }else if(req.method === "PUT") {

        resp.setHeader('Content-type', 'text/plain');
        resp.end("I just put something")
    }
    resp.statusCode = 200;
})
app_old.listen(process.env.PORT);*/

