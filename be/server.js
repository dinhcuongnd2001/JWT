require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 4000;
const cors = require("cors");

// fake database
const users = [
  { id: 1, username: "dncuong" },
  { id: 2, username: "dtuvy" },
];

const post = [
  { id: 1, name: "bai hoc ve JWT", des: "" },
  { id: 2, name: "NodeJS", des: "" },
  { id: 3, name: "About ReactJS", des: "" },
  { id: 4, name: "About Express", des: "" },
];

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.get(`/post`, (req, res) => {
  res.json({ post: "my post" });
});
app.post("/", (req, res) => {
  console.log("username la:", req.body.username);
  const user = users.find((each) => each.username == req.body.username);
  if (!user) return res.sendStatus(401);
  // Create JWT
  else {
    const accessToken = jwt.sign(
      { username: "dnc" },
      process.env.ACCESS_TOKEN_SERCRET
    );
    res.json({ accessToken });
  }
});
app.get("/", (req, res) => {
  //   console.log(req.body.username);
  res.json({ post: "my post" });
});
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
