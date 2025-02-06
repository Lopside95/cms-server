import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../src/index";
import { testShelter } from "./fixtures";

describe("create shelter", () => {
  it("should return 201 and create shelter", async () => {
    const res = await request(app).post("/shelters").send({
      name: testShelter.name,
      location: testShelter.location,
      email: testShelter.email,
      phone: testShelter.phone,
      capacity: testShelter.capacity,
      longitude: testShelter.longitude,
      latitude: testShelter.latitude,
    });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(testShelter.name);
  });
});
