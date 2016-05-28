var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response) {

	console.log("Request handler 'start' was called.");

	var body ='<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html; '+
	    'charset=UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/upload" enctype="multipart/form-data" '+
	    'method="post">'+
	    '<input type="file" name="upload">'+
	    '<input type="submit" value="Upload file" />'+
	    '</form>'+
	    '</body>'+
	    '</html>';

	    response.writeHead(200,{"Content-Type":"text/html"});
	    response.write(body);
	    response.end();
}

function upload(response, request) {
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("About to parse");

	form.parse(request, function(error, fields, files) {
		console.log("parsing done");
		fs.renameSync(files.upload.path,"./data/data.json");
		response.writeHead(200,{"Content-Type":"text/html"});
		// response.write("received image:<br/>");
		// response.write("<img src='/show' />");

		response.write("upload success.Go to show for a look.");

		response.end();
	});
}

function show(response){
  console.log("Request handler 'show' was called.");
  fs.readFile("./data/data.json", "utf-8", function(error, file){
    if(error){
      response.writeHead(500,{"Content-Type":"text/plain"});
      response.write(error +"\n");
      response.end();
    }else{
      response.writeHead(200,{"Content-Type":"application/json"});
      response.write(file, "utf-8");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
