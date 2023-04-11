const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const PORT = 9191;
let users = [];
const addUser = ({userId, socketId}) => {
  users.every((user) => user.userId !== userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
io.on("connection", (socket) => {
  console.log("a user connected");

  // Get users on line
  socket.on("addUser", (userId) => {
    addUser({userId, socketId  :socket.id});
    io.emit("getUsers", users);
  });
  // send users

  // User disconnected
  socket.on("disconnect", (socket) => {
    console.log("a user disconnected");
        removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
server.listen(PORT, () => {
  console.log("Connected to port :", PORT);
});
