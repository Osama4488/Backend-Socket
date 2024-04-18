// Controller (controller.js)

const { fetchData } = require("./model");

// Handle socket connection
const handleSocketConnection = (io) => {
  console.log("inside handle socket connection");
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // Send initial data to client on connection
    sendData(socket);

    // Fetch new data every second and send to client
    setInterval(() => {
      sendData(socket);
    }, 1000);

    // Handle socket disconnection
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};

// Send data to client
const sendData = (socket) => {
  const data = fetchData(); // Fetch data from model
  socket.emit("data", data); // Emit data event to client
};

module.exports = { handleSocketConnection };
