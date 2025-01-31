import request from "supertest";
import app from "../../src/shared/server";

describe("AuthController", () => {
  it("should return a token when a valid origin is provided", async () => {
    const res = await request(app)
      .post("/api/v1/auth")
      .send({ origin: "meusite.com" });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("should return 400 when no origin is provided", async () => {
    const res = await request(app).post("/api/v1/auth").send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Origin is required");
  });
});
