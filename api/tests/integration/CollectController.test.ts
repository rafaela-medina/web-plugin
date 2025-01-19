import request from "supertest";
import app from "../../src/shared/server";

describe("CollectController", () => {
  let token: string;

  beforeAll(async () => {
    const authRes = await request(app)
      .post("/api/v1/auth")
      .send({ domain: "meusite.com" });

    token = authRes.body.token;
  });

  it("should return 401 if token is missing", async () => {
    const res = await request(app).post("/api/v1/collect").send({
      device: "desktop",
      os: "Windows",
      themeSwitchCount: 3,
    });

    expect(res.status).toBe(401);
    expect(res.body.error).toBe("Token is missing or malformed");
  });

  it("should collect event successfully", async () => {
    const res = await request(app)
      .post("/api/v1/collect")
      .set("Authorization", `Bearer ${token}`)
      .send({
        device: "desktop",
        os: "Windows",
        themeSwitchCount: 3,
      });

    expect(res.status).toBe(201);
    expect(res.body.device).toBe("desktop");
  });
});
