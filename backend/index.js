require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const routesAuth = require("./routes/auth");
const routesChats = require("./routes/chats");
const routesConversations = require("./routes/conversations");
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://viettaixca123:Reo.2640441@messenger.yjchmhh.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/api/auth", routesAuth);
app.use("/api/chats", routesChats);
app.use("/api/conversations", routesConversations);
app.listen(5111, () => {
  console.log("listen on port :" + 5111);
});
