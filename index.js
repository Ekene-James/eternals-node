const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");

const cors = require("cors");

const colors = require("colors");

//bring in the router files
const storePayments = require("./api/storePayments");


const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

const app = express();

//body parser
app.use(express.json());
const corsOptions ={
  origin:"*",    
  credentials: true,       //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//connect to db
const db = require("./config/keys/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(connections => {
    console.log(`mongodb connected `.cyan.underline.bold);
  })
  .catch(err => console.log(`${err.message}`.red.bold));

  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

//mount the routers
app.use("/api/storePayments", storePayments);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `App listening on PORT: ${PORT}! and on mode : ${process.env.NODE_ENV}`
      .yellow.bold
  )
);
process.on("unhandledRejection" || "uncaughtException", (err, promise) => {
  console.log(`error : ${err.message}`);
  server.close(() => process.exit(1));
});



// "headers": [
//   {
//     "source": "/(.*)",
//     "headers": [
//       { "key": "Access-Control-Allow-Credentials", "value": "true" },
//       { "key": "Access-Control-Allow-Origin", "value": "*" },
//       { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//       { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
//     ]
//   }
// ]