var express = require('express');
var router = express.Router();
var getquery = require('../scripts/dbconn');
var query = getquery('query');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//   next();
// });

router.get('/login',function (req,res) {  
  res.render('login');
});



router.post('/login',function(req,res){
  var users = req.body;
  console.log(users);
  var uname = users.uname;
  var pwd = users.pwd;
  var queryStr = "select * from g_user where uname = '" + uname + "' and pword = '" + pwd+ "'";
  query(queryStr,function(err,rows){
      if(err){
          console.log(err);
      }else{
        if(rows.length == 0){
          res.render('error');
        }else{
          console.log(rows[0].uname);
          var option = {
            'user':uname
          }
          res.render('users',option,function(err,html){
            if(err){
              console.log(err);
            }else{
              res.end(html);
            }
          });
          
        }        
      }
  });
});

module.exports = router;
