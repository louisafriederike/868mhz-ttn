var http = require('http');
// var ttn = require("ttn");
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
// var index = fs.readFileSync('index.html');
var port = 8000;
const bodyParser = require("body-parser");
const { Server } = require("socket.io");


var server = http.createServer(app);


const io = new Server(server);
io.on('connection', (socket) => {
  console.log('a user connected');
   socket.emit('connection', { data:"Successfully connected" });
});

app.use(bodyParser.json());

app.post("/lorawan", (req, res) => {
    console.log(req.body) // Call your action on the request here

    io.emit('node1', { message:req.body.uplink_message,device_id:req.body.end_device_ids.device_id });
    res.status(200).end() // Responding is important
    io.emit('node2', { message:req.body.uplink_message,device_id:req.body.end_device_ids.device_id });
    res.status(200).end() // Responding is important
    io.emit('node3', { message:req.body.uplink_message,device_id:req.body.end_device_ids.device_id });
    res.status(200).end() // Responding is important
    io.emit('node4', { message:req.body.uplink_message,device_id:req.body.end_device_ids.device_id });
    res.status(200).end() // Responding is important
    io.emit('node5', { message:req.body.uplink_message,device_id:req.body.end_device_ids.device_id });
    res.status(200).end() // Responding is important
  });
  
app.use(express.static(path.join(__dirname, "public")));

// app.listen(port, () => console.log(`Server running on port ${port}`))
server.listen(8000, () => {
  console.log('listening on *:8000');
}); 


// io.on('connection', function(socket){

//     parser.on('data', function(data) {    
//         const msg = data.split(' ');
//         console.log(msg[0], msg[1]);
//         io.emit(msg[0], msg[1]);      
//     }); 
    
//     console.log('Node.js is listening :)');
//     socket.on("hello", (arg, callback) => {
//     console.log("hello"); // "world"
//     io.emit('world');

//     }); 

//     socket.on('chat message', (msg) => {
//         console.log('[user]['+ socket.id + '][' + msg + ']');
//     }); 

//     socket.on('userposition', (msg) => {
//         console.log('[user]['+ socket.id + '][position: ' + msg[0] + ',' + msg[1]+ ']');
//         socket.to('expo').emit(socket.id, msg);
//     }); 

    

// });



// app.listen(5501);
