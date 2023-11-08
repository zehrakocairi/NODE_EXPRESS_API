import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("GET /users", () => {
  it("should return all users", async () => {
    return request
      .get("/users")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("POST /users", () => {
  it("should create a user", async () => {
    return request
      .post("/users")
      .send({
        id: 1,
        name: "zehra",
        email: "zehra@gmail.com",
      })
      .expect(200);
  });
});

// describe("POST /", () => {
//     it("Quick test", async () => {
//       const res = await request.post("/weather").send({ cityName: "London" }).expect(200);
//       expect(res.text != null).toBe(true);
//       const data = JSON.parse(res.text);
//       expect(data.cityName).toBe("London");
//     });
//   });
