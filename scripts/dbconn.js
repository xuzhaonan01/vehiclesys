var mysql = require('mysql');

var pool = mysql.createPool({
            host:'cdb-erdussx2.bj.tencentcdb.com',
            user:'root',
            password:'19821027a',
            database:'CarsDb',
            port:'10034'
        });


var query = function(sql,callback){
    pool.getConnection((err,conn)=>{
        conn.query(sql,function (err,rows) {  
            if(err){
                callback(err,null);
            }else{
                callback(err,rows);
            }
        });
        conn.release();
    });
}

var getquery = function(no){
    if(no == "query"){
        return query;
    }
}



module.exports = getquery;

