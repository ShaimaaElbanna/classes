console.log("hello")
const fs = require("fs");
function handleRequest(req, res){
    fs.readFile("index.html","utf8", function(err, data){

        if (error){
            console.log(error);
        }else {
         res.write(data)
        }
    })
    res.end();
}

