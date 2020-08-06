const sqlite3 = require("sqlite3");

//this  is a  funtion  is  using  for  insert user in   database
exports.insert_user = (user, res) => {
    let db = new sqlite3.Database('../database/mydatabase.sqlite', (err) => {
      if (err) {
        console.error(err.message);
      }
      else{
          parameter = [user.user ,user.name ,user.name_first,user.name_second, user.email ,user.passwork ,user.key]
          db.run(`insert into user(user,name,name_first,name_second,email,passwork,key)values('?','?','?','?','?','?','?')`, parameter, function(err) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
              "Access-Control-Allow-Headers",
              "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
            );
            res.header(
              "Access-Control-Allow-Methods",
              "GET, POST, OPTIONS, PUT, DELETE"
            );
            res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");              
            res.status(err?201:200).json({
              result: err?err.message:"ok",
            });
            db.close((err) => {
                if (err) {
                  return console.error(err.message);
                }
            });
          });
      }
    });
  }