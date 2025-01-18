import request from "supertest";
import app from "../../src/shared/server";

describe("ListController", () => {
  it("should return 400 if domain is missing", async () => {
    const res = await request(app).get("/api/v1/list");
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Domain is required");
  });

  it("should return an empty list if no events exist", async () => {
    const res = await request(app).get("/api/v1/list?domain=meusite.com");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});
