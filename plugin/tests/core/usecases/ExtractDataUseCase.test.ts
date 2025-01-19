import { ExtractDataUseCase } from "../../../src/core/useCases/ExtractDataUseCase";
import { ApiService } from "../../../src/core/services/ApiService";

jest.mock("../../../src/core/services/ApiService");

describe("ExtractDataUseCase", () => {
  let extractDataUseCase: ExtractDataUseCase;
  let apiService: jest.Mocked<ApiService>;

  beforeEach(() => {
    apiService = new ApiService() as jest.Mocked<ApiService>;
    extractDataUseCase = new ExtractDataUseCase(apiService);
  });

  it("deve coletar os dados e enviá-los para a API", async () => {
    apiService.sendData.mockResolvedValue(true);

    const result = await extractDataUseCase.execute();

    expect(apiService.sendData).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it("deve lidar com erro ao enviar dados", async () => {
    apiService.sendData.mockRejectedValue(new Error("Erro na API"));

    await expect(extractDataUseCase.execute()).rejects.toThrow("Erro na API");
  });
});
