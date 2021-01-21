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

process.env.HOST = '127.0.0.1';
process.env.PORT = '3500';


const app = express();
//app.use(express.static(path.join(__dirname + '/public')));

/*
    Роутер привязка до домашньої сторінки http://localhost:3500/ 
    привязуємо локальну папку для використання статичних файлів
*/
app.use("/", express.static(path.join(__dirname + '/public/page')));
app.get("/",  (req, res) => {
    console.log(os.hostname())
    let link = path.join(__dirname, "/public/page/index.html");
    res.sendFile(link);
});

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
app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>")
});
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
});
app.get("/about/contacts", (req, res) => {
    res.send("<h1>About Contacts Page</h1>")
});*/

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

