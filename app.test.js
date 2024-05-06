const axios = require("axios");
const app = require("./app");
const users = require("./webservice/models/users");

describe("webservice testing", () => {
  let server;
  const PORT = process.env.PORT || 3000;

  beforeEach(() => {
    server = app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}`)
    );
  });

  afterEach(() => {
    server.close();
  });

  test("GET users", async () => {
    const resp = await axios.get(`http://localhost:${PORT}/users`);
    const respUsers = resp.data.data;

    expect(respUsers).toEqual(users);
  });

  test("GET user by ID - positive scenario", async () => {
    const id = 123;
    const resp = await axios.get(`http://localhost:${PORT}/users/${id}`);
    const respUser = resp.data.data;

    expect(respUser).toEqual(users.find((user) => user.id === id));
  });

  test("GET user by ID - negative scenario", async () => {
    const id = 100;
    try {
      await axios.get(`http://localhost:${PORT}/users/${id}`);
    } catch (err) {
      expect(err.response.data.data).toBe(null);
      expect(err.response.status).toBe(400);
    }
  });
});
