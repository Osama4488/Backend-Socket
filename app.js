// Backend code (server.js)

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { handleSocketConnection } = require("./controller");
const cors = require("cors");
const app = express();
const server = http.createServer(app);

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Set up socket connection with CORS enabled
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Set up socket connection
handleSocketConnection(io);

// app.get("/", (req, res) => {
//   res.send("Successful");
// });

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
