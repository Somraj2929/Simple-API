const express = require("express");
const port = 3000;
const hostname = "localhost";

const app = express();
app.use(express.json());

app.post("/listSum", (req, res) => {
  let arr = req.body.list;
  let listSum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(listSum);
  res.status(200).send({ "Sum of list": listSum });
});
app.listen(port, hostname, () => {
  console.log("API server listening on port 3000");
});
