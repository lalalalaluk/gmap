var express = require("express"),
    app = express(),
	fs = require("fs");

app.use("/",express.static(__dirname+"/" ));

app.listen(8081);
console.log("8081");

  	app.get('/', function(request, response){
        response.writeHead(200, {"Content-Type":"text/html"});
        html = fs.readFileSync(__dirname+"/gMap.html", "utf8");
        response.write(html);
		response.end();

  });
