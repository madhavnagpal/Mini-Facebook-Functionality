const express = require("express");
const app = express();
const { db } = require("./db/modals");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sync()
  .then(() => {
    app.listen(4000, () => {
      console.log(
        "Database has been synchronized and Server is started at 4000..."
      );
    });
  })
  .catch((err) => console.log(err));
