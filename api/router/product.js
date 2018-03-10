const db = require('../db');
const apiResult = require('../utils/apiResult')
const filter = require('../utils/filter')

module.exports = {
    register(app){
        app.get('/goods', (req, res) => {
            console.log(req.query);
            db.mongodb.select('goods').then((result) => {
                if(result && result.length > 0){
                    res.send(apiResult(true, result))
                } else {
                    res.send(apiResult(false));
                }
            })
        })
    }
}