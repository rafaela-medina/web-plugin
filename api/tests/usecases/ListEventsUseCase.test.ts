import ListEventsUseCase from "@core/usecases/ListEventsUseCase";

describe("ListEventsUseCase", () => {
  it("should return an empty array when no events exist", async () => {
    const events = await ListEventsUseCase.execute("meusite.com");
    expect(events).toEqual([]);
  });
});
