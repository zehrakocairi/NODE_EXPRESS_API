import app from "../index.js";
import supertest from "supertest";

const request = supertest("http://localhost:3001");

describe("POST /users", () => {
  it("should create a user", async () => {
    return request
      .post("/users")
      .send({
        firstname: "zehra",
        lastname: "surname",
        age: 12,
      })
      .expect(200);
  });
  it("should return bad request when age is missing", async () => {
    return request
      .post("/users")
      .send({
        firstname: "testname2",
        lastname: "testsurname2",
      })
      .expect(400);
  });
  it("should return bad request when any extra field exists", async () => {
    return request
      .post("/users")
      .send({
        firstname: "testname2",
        lastname: "testsurname2",
        age: 12,
        extrafield: "extrafield",
      })
      .expect(400);
  });
});

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
async function getExistingFirstUser() {
  const data = (await request.get("/users")).text;
  const existingUser = JSON.parse(data)[0];
  return existingUser;
}
describe("GET /users/:id", () => {
  it("should return a user", async () => {
    const existingUser = await getExistingFirstUser();
    return request
      .get(`/users/${existingUser.id}`)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("PATCH /users/:id", () => {
  test("should update a user", async () => {
    const existingUser = await getExistingFirstUser();

    return request
      .patch(`/users/${existingUser.id}`)
      .send({ firstname: "new name" })
      .expect(200)
      .then(({ text }) => {
        expect(text).toBe("user updated succesfully");
      });
  });
});

describe("DELETE /users/:id", () => {
  it("should delete a user", async () => {
    const existingUser = await getExistingFirstUser();
    return request.delete(`/users/${existingUser.id}`).expect(200);
  });
});
