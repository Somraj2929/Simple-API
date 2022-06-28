const express = require("express");
const port = 3000;
const hostname = "localhost";

const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  let x = req.body.firstNum;
  let y = req.body.secondNum;
  let z = req.body.thirdNum;
  console.log(x + y + z);

  res.status(200).send({ sum: x + y + z });
});

app.post("/vowels", (req, res) => {
  let s = req.body.str;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      count++;
    }
  }
  console.log(count);
  res.status(200).send({ vowels: count });
});

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
