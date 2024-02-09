require("supertest");
require("dotenv").config();

const Server = require("../src/server");
const server = new Server();

beforeAll(async () => {
  try {
    await server.listen();
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
});

describe("trying post endpoints", () => {
  test("get endpoint", async() => {
    const response = await request(server).get("/api/post")
    expect(response.statusCode).toBe(200)
  })
})

describe("set of math test", () => {
  test("it is pair", () => {
    expect(6 % 2).toEqual(0);
  });

  test("it is not pair", () => {
    expect(7 % 2).not.toEqual(0);
  });
});

afterAll(() => {
  server.close();
}); 