const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const { db } = require("./db");

const userRoute = require("./src/routes/users");
const postRoute = require("./src/routes/posts");
const commentRoute = require("./src/routes/posts/comments");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/src/public"));

app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database has been synchronized and server is running at port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => console.log(e));
