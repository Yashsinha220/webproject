const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { db } = require("./db/db");
const { readdirSync } = require("fs");

const app = express()



// routes
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

require("dotenv").config();

const PORT = process.env.PORT || 3000;



// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('combined'))

app.listen(PORT, () => {
  db();
  console.log(`server listening on 🚀http://localhost:${PORT}`);
});
