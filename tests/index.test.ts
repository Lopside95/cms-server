import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../src/index";
import test from "node:test";
import { testItem } from "./fixtures";
import exp from "constants";

describe("get items page", () => {
  it("should return 200 for get items page", async () => {
    const res = await request(app).get("/items");
    expect(res.status).toBe(200);
    // expect(res.body.message).toBe("this is coming from the items page");
  });
});

// describe("create item", () => {
//   it("should return 201 and create item", async () => {
//     const res = await request(app).post("/items").send({
//       itemName: testItem.item_name,
//       quantity: testItem.quantity,
//     });
//     expect(res.status).toBe(201);
//     expect(res.body.itemName).toBe(testItem.item_name);
//   });
// });
