const express = require("express");
const path = require("path");
const PORT = 3000;
const userController = require("./controllers/userController");
//const authController = require('./controllers/authController');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parses request body

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.status(200);
  next();
});

// if (process.env.NODE_ENV) {
//   app.use('/', express.static(path.join(__dirname, '../dist')));
// }

app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../client/index.jsx"));
});

// signup router, direct to /login endpoint if success
app.post("/signup", userController.createUser, (req, res) => {
  return res.status(201).json(res.locals.newUser);
});
// signin router, direct to root endpoint if success
app.post("/login", userController.loginUser, (req, res) => {
  res.locals.loginStatus === false
    ? res.status(200).json("log in failed")
    : res.status(200).redirect("/");
});

// app.get("/", (req, res) => {
//   res.redirect(`/${uuidV4()}`);
// });

// app.get("/:room", (req, res) => {
//   res.render("room", { roomId: req.params.room });
// });

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

// // Create catch-all error handler for unkown routes
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for")
);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// app.listen(PORT, () => {
//     console.log('Server is now listening on Port ', PORT);
// })

server.listen(PORT, () => console.log("server listening on port " + PORT));

// module.exports = app;
