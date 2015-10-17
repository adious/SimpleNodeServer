
var http = require('http');
var dispatcher = require('httpdispatcher');
const PORT = 23455;

//request handler
function requestHandler(req,res){
	try{
		//res.end("It worked "+req.url);
		//dispatcher
		 dispatcher.dispatch(req,res);
	}catch(err){
		console.log(err);	
	}	
}


dispatcher.onGet('/page1',function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Page One');
});

dispatcher.onPost('/post1',function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});	
	res.end('Got Post Data');
});

//server created
var server = http.createServer(requestHandler);
server.listen(PORT, function(){
	console.log('Server is listening at port:' + PORT);
});