const express = require("express");
const app = express();
const { db } = require("./db/index");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/public"));
app.use("/users", userRoute);
app.use("/posts", postRoute);

db.sync()
  .then(() => {
    app.listen(4000, () => {
      console.log(
        "Database has been synchronized and Server is started at 4000..."
      );
    });
  })
  .catch((err) => console.log(err));
