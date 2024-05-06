const users = require("./../models/users");

const getUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    return res.send({
      status: "SUCCESS",
      code: 200,
      data: user,
      message: "Single user returned",
    });
  }
  res.status(400).send({
    status: "FAILURE",
    code: 400,
    data: null,
    message: "No user found",
  });
};

module.exports = getUser;
