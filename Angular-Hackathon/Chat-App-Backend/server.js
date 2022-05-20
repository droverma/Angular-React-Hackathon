var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => res.send('hello!'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("msgUser", (msg) => {
        socket.broadcast.emit("msgRcv", msg);
    });
});

http.listen(8000, () => {
    console.log('listening on *:8000');
});