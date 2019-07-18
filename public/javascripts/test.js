var getfunc = require('./dbconn');
var optypr = require('./selection');
var query = getfunc(optypr.QUERY);
var queryStr = "select * from g_user where uname = 'xuzhaonan'";
query(queryStr,function(err,rows){
    if(err){
        console.log(err);
    }else{
        console.log(rows[0].uname);
    }
});