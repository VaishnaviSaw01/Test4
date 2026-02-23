const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false
  })
);

app.post("/login", (req, res) => {
  const { role } = req.body; 
  req.session.role = role;

  res.json({ message: `${role} LoggedIn` });
});


app.get("/dashboard", (req, res) => {
  if (!req.session.role) {
    return res.status(401).json({ message: "Please login first" });
  }

  res.json({ message: `Welcome ${req.session.role}` });
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out successfully" });
});

app.listen(3000, () => {
  console.log("Server running");
});