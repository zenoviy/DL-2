const fs = require('fs');
const path = require('path');

const postUsers = (req, res) => {
    const userDataLink = path.join(__dirname +'/../public/db');
    if(Object.entries(req.body).length < 1) return res.send({text: "Empty request"})

    req.body.id = new Date().getTime();
    if(!fs.existsSync(userDataLink + '/userData.json')){
        fs.writeFile(userDataLink + '/userData.json', JSON.stringify([].concat(req.body)), err => {
            console.log(err)
            return res.send({text: err})
        })
    }

    fs.readFile(userDataLink + '/userData.json', (err, data) => {
        if(err) return res.send({text: err})

        let convertData = JSON.parse(data);
        convertData = convertData.concat(req.body);
        console.log(convertData)
        fs.writeFile(userDataLink + '/userData.json', JSON.stringify(convertData), err => {
            return res.send({text: err})
        })
        return res.send({text: "User was successfully saved!!!"})
    })
}

module.exports = { postUsers }