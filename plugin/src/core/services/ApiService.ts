import { DataExtractionDTO } from "../dtos/DataExtractionDTO";

export class ApiService {
  private baseUrl = "http://localhost:3000/api/v1";
  private token: string | null = null;

  async getToken(): Promise<string> {
    if (this.token) return this.token;

    const response = await fetch(`${this.baseUrl}/auth`, { method: "POST" });
    const data = await response.json();
    this.token = data.token;
    return this.token!;
  }

  async sendData(data: DataExtractionDTO): Promise<boolean> {
    const token = await this.getToken();

    const response = await fetch(`${this.baseUrl}/collect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.ok;
  }
}
