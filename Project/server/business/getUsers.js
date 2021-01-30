const fs = require('fs');
const path = require('path');

const getUSers = (req, res) => {
    const userDataLink = path.join(__dirname +'/../public/db');
    if(!fs.existsSync(userDataLink + '/userData.json')){ 
        return res.send({text: "No users at this moment!", body: []})
    }
    fs.readFile(userDataLink + '/userData.json', (err, data) => { 
        if(err || !data) return res.send({text: err})

        if(!JSON.parse(data)) return res.send({text: "No users at this moment!", body: []})
        let convertData = JSON.parse(data).map(user => {
            return {
                id: user.id,
                name: user.name
            }
        });
        res.setHeader('Content-type', 'application/json')
        return res.send(JSON.stringify({body: convertData, text: `we foun some users: ${convertData.length}`}))
    })
}


module.exports = { getUSers }