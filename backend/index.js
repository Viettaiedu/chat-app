require("dotenv").config();
require('./db');
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const routesAuth = require("./routes/auth");
const routesChats = require("./routes/chats");
const routesConversations = require("./routes/conversations");
const routesUpload = require("./routes/upload");
app.use(cors({
  origin :'http://localhost:3000',
  preflightContinue:true,
  credentials:true
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/api/auth", routesAuth);
app.use("/api/chats", routesChats);
app.use("/api/conversations", routesConversations);
app.use("/api/upload", routesUpload);
app.listen(5111, () => {
  console.log("listen on port :" + 5111);
});
