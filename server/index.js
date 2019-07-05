require("dotenv").config();
const express = require("express");
const controller = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const massive = require("massive");

const app = express();

app.use(express.json());

app.get("/api/inventory", controller.doesItWork); //controller.<fnName>
app.post("/api/product", controller.create);
app.delete("/api/products/:id", controller.delete);

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () => {
      console.log(`This server.... It's over ${SERVER_PORT}!!`);
    });
  })
  .catch(err => console.log("database status: ERROR", err));
