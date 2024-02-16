process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("./app");
const items = require("./fakeBb");

let item = { name: "rice", price: 2.99 };
/*
///////////////////// Run before and after  ///////////////////
*/

beforeEach(function () {
  items.length = 0;
  items.push(item);
});
afterEach(function () {
  items.length = 0; // clear the contents of the array
});

/*
///////////////////// Tests  ///////////////////
*/

//  Get all items
describe("GET /items", () => {
  test("Get all items", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([item]);
  });
});

//  Create an item
describe("GET /items/:name", () => {
  test("Get an item", async () => {
    const res = await request(app).get(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(item);
  });
  test("Responds with Item Not Found", async () => {
    const res = await request(app).get(`/items/ehsrh`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({
      error: {
        message: "Item not found!",
        status: 404,
      },
    });
  });
});

// Create a new item
describe("POST /items", () => {
  const bananas = {
    name: "bananas",
    price: 4.99,
  };
  test("Create new item", async () => {
    const res = await request(app).post("/items").send(bananas);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(bananas);
  });
  test("Responds with 400 if name is missing", async () => {
    const posho = { price: 3.99 };
    const res = await request(app).post("/items").send(posho);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      error: {
        message: "Item must have a name!",
        status: 400,
      },
    });
  });
  test("Responds with 400 if empty request", async () => {
    const posho = {};
    const res = await request(app).post("/items").send(posho);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      error: {
        message: "Empty item cannot be added!",
        status: 400,
      },
    });
  });
});

//  Update an item
describe("PATCH /items", () => {
  const rice = {
    name: "super rice",
    price: 3.99,
  };
  test("Update item", async () => {
    const res = await request(app).patch(`/items/${item.name}`).send(rice);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(rice);
  });
  test("Responds with Not Found", async () => {
    const res = await request(app).patch(`/items/fene`).send(rice);
    expect(res.statusCode).toBe(404);
  });
});

// Delete an item
describe("/DELETE /items/:name", () => {
  test("Remove an item", async () => {
    const res = await request(app).delete(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      message: "Item removed!",
    });
  });
  test("Responds with 404 - Item Not Found", async () => {
    const res = await request(app).delete("/items/cupa");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({
      error: {
        message: "Item not found!",
        status: 404,
      },
    });
  });
});
