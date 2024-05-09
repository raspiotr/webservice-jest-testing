const express = require("express");
const logger = require("morgan");

const getUser = require("./webservice/controllers/getUser");
const getUsers = require("./webservice/controllers/getUsers");

const app = express();

app.use(logger("short"));

app.get("/users", getUsers);
app.get("/users/:id", getUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
