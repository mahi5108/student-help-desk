const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const mainRouter = require('./routes/mainRouter');

const app = express();
const PORT = 3000;

// app.use(express.json());

const pathName = path.join(__dirname, "public");
app.use(express.static(pathName))

const viewsPath = path.join(__dirname, "views");
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const uri =
  "mongodb+srv://mahisagar1809:eqYdTKXL0qDuA53r@cluster0.kca9owf.mongodb.net/Desk?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});

app.use(mainRouter);

app.get("/", (req, res) => {
  res.status(200).send("Success123");
});

// app.use("*", (req, res) => {
//   res.json({error: "Error 404"})
// })

app.listen(process.env.PORT || PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

module.exports=app; 
