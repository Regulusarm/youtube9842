const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let port = Number(process.env.PORT || 3001);

app.get('/', (req, res) => {
  console.log("Hello");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

httpServer.listen(port, () => {
  console.log(`listening on *:${port}`);
});