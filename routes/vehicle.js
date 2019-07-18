var express = require('express');
var router = express.Router();
var url = require('url');
var getquery = require('../scripts/dbconn');
var query = getquery('query');


router.get('/',function(req, res, next) {
    res.render('vehicledetail.html');
});

/* GET home page. */
router.get('/detail', function(req, res, next) {
    var par = url.parse(req.url,true).query;
    var code = par.code;
    console.log(code);
    res.cookie('code',code);
    res.render('vehicledetail.html');    
});

router.post('/detail', function(req, res, next) {
    var code = req.body.code;
    console.log(code);

    var queryStr = "select * from car_details where plate = '" + code + "'";
    query(queryStr,function(err,rows){
        if(err){
            console.log(err);
        }else{
            if(rows.length == 0){
                res.render('error');
            }else{
                console.log(rows[0].make); 
                var obj = rows[0];
                res.send(obj);
            }        
        }
    }); 
});

router.get('/addvehicle',(req,res)=>{
    res.render('addvehicle');
});


module.exports = router;
