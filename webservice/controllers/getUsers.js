const users = require("./../models/users");

const getUsers = (_, res) => {
  res.send({
    status: "SUCCESS",
    code: 200,
    data: users,
  });
};

module.exports = getUsers;
