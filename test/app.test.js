import app from "../index.js";
import supertest from "supertest";

const request = supertest(app);

describe("GET /users", () => {
  it("should return all users", async () => {
    return request
      .get("/users")
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

// describe("POST /users", () => {
//   it("should create a user", async () => {
//     return request
//       .post("/users")
//       .send({
//         firstname: 1,
//         lastname: "zehra",
//         email: "zehra@gmail.com",
//       })
//       .expect(200);
//   });
// });
