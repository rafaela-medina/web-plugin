import AuthenticateUseCase from "@core/usecases/AuthUseCase";

describe("AuthenticateUseCase", () => {
  it("should generate a token for a valid domain", async () => {
    const token = await AuthenticateUseCase.execute("meusite.com");
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
  });

  it("should return null for an invalid token", async () => {
    const isValid = await AuthenticateUseCase.validate("invalid-token");
    expect(isValid).toBeNull();
  });
});
