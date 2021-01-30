const fs = require('fs');
const path = require('path');


const deleteUser = (req, res) => {
    const userDataLink = path.join(__dirname +'/../public/db');
    if(!fs.existsSync(userDataLink + '/userData.json')){ 
        return res.send({text: "No users at this moment!"})
    }

    fs.readFile(userDataLink + '/userData.json', (err, data) => { 
        if(err) return res.send({text: err})

        let convertData = JSON.parse(data)
        const headers = req.headers;
        console.log(headers, headers['user-id'], "Header")
        let targetUser = convertData.find(user => user.id == headers['user-id']);
        if(!targetUser) return res.send({text: 'USer not Exist'});

        let userIndex = convertData.indexOf(targetUser);
        convertData.splice(userIndex, 1);
        fs.writeFile(userDataLink + '/userData.json', JSON.stringify(convertData), err => {
            if(err) return res.send({text: err})
            return res.send({text: 'Delete user'})
        })
        
    })
    // headers   // userId
}

module.exports = { deleteUser }