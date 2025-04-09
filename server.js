const express = require('express');
const main=require('./config/db');
const app = express();
const port = 3000;

app.use(express.json());



main().
  then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Listening at port 3000")
    })
    }
  ).catch((err) => {
    console.log("DB connection failed:", err);
  })
