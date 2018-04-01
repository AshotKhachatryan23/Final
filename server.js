//miacnum enq express, io , fs  gradaranner@
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
//միանում է socket.io - ին
io.on('connection', function (socket) {
   socket.on("send message", function (static) {
     //ստեղծում է static.json ֆայլ և գրում այնտեղ տվյալները  
       io.sockets.emit("display message", static);
       //   +"\n" -ը նոր տողից գրելու համար է    
       fs.appendFileSync("static.json", JSON.stringify(static)+"\n");

   })
});

// anhaskanali function
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

//asxatuma localhost:3000 i vra
server.listen(3000);
//thanks for reading