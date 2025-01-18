import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AuthRepository from "../../infrastructure/repositories/AuthRepository";

dotenv.config();

class AuthUseCase {
  async execute(domain: string): Promise<string> {
    const token = jwt.sign({ domain }, process.env.JWT_SECRET as string, {
      expiresIn: "10m",
    });

    await AuthRepository.save({ domain, token, expiresAt: new Date(Date.now() + 10 * 60 * 1000) });

    return token;
  }

  async validate(token: string): Promise<string | null> {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { domain: string };
      return decoded.domain;
    } catch (error) {
      return null;
    }
  }
}

export default new AuthUseCase();
