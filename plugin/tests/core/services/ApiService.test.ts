import { ApiService } from "../../../src/core/services/ApiService";

global.fetch = jest.fn();

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
    jest.clearAllMocks();
  });

  it("deve obter um token de autenticação", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ token: "fake-token" }),
    });

    const token = await apiService.getToken();

    expect(token).toBe("fake-token");
  });

  it("deve enviar dados corretamente", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: true });

    const data = {
      origin: "https://example.com",
      device: "desktop",
      os: "Windows",
      themeSwitchCount: 2,
    };

    const result = await apiService.sendData(data);

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/v1/collect",
      expect.objectContaining({ method: "POST" })
    );
    expect(result).toBe(true);
  });

  it("deve lançar erro ao enviar dados sem token", async () => {
    await expect(apiService.sendData({} as any)).rejects.toThrow(
      "Token de autenticação não definido"
    );
  });
});
