const fs = require('fs');
const path = require('path');

const postUsers = (req, res) => {
    const userDataLink = path.join(__dirname +'/../public/db');
    
    if(Object.entries(req.body).length < 1 || !req.body) return res.send({text: "Empty request"})
    
    req.body.id = new Date().getTime();
    if(!fs.existsSync(userDataLink + '/userData.json')){
         fs.writeFile(userDataLink + '/userData.json', JSON.stringify([].concat(req.body)), err => {
            console.log(err)
            if(err) return res.send({text: `Error has been occured on first writing: ${err}`})
            return res.send({text: "First user was Created"})
        });    
    }

    fs.readFile(userDataLink + '/userData.json', (err, data) => {
        if(err) return res.send({text: err})

        let convertData = JSON.parse(data);
        convertData = convertData.concat(req.body);
        
        fs.writeFile(userDataLink + '/userData.json', JSON.stringify(convertData), err => {
            if(err) return res.send({text: `Error has been occured on writing: ${err}`})

            return res.status(201).send({text: "User was successfully saved!!!"})
        });
        
    })/**/
}

module.exports = { postUsers }