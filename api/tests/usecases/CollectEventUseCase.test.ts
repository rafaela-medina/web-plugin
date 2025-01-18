import CollectEventUseCase from "@core/usecases/CollectEventUseCase";

describe("CollectEventUseCase", () => {
  it("should save an event successfully", async () => {
    const event = await CollectEventUseCase.execute({
      domain: "meusite.com",
      device: "desktop",
      os: "Windows",
      themeSwitchCount: 3,
    });

    expect(event).toBeDefined();
    expect(event.domain).toBe("meusite.com");
    expect(event.device).toBe("desktop");
  });
});
