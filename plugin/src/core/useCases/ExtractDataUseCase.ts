import { DataExtractionDTO } from "../dtos/DataExtractionDTO";
import { detectDevice, detectOS, getOrigin, getThemeSwitchCount } from "../dataExtractor";
import { ApiService } from "../services/ApiService";

export class ExtractDataUseCase {
  constructor(private apiService: ApiService) {}

  async execute(): Promise<boolean> {
    const data: DataExtractionDTO = {
      origin: getOrigin(),
      device: detectDevice(),
      os: detectOS(),
      themeSwitchCount: getThemeSwitchCount(),
    };

    return await this.apiService.sendData(data);
  }
}