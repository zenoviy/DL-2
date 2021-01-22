const fs = require('fs');
const path = require('path');

const getUSers = (req, res) => {
    const userDataLink = path.join(__dirname +'/../public/db');
    if(!fs.existsSync(userDataLink + '/userData.json')){ 
        return res.send({text: "No users at this moment!"})
    }
    fs.readFile(userDataLink + '/userData.json', (err, data) => { 
        if(err) return res.send({text: err})

        let convertData = JSON.parse(data).map(user => {
            return {
                id: user.id,
                name: user.name
            }
        });
        res.setHeader('Content-type', 'application/json')
        res.send(JSON.stringify({body: convertData, text: `we foun some users: ${convertData.length}`}))
    })
}


module.exports = { getUSers }