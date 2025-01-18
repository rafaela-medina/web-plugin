import jwt from "jsonwebtoken";

const AuthUseCase = {
  async execute(domain: string): Promise<string> {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não está definido nas variáveis de ambiente");
    }

    return jwt.sign({ domain }, process.env.JWT_SECRET, { expiresIn: "24h" }); // 🔥 JWT autossuficiente
  }
};

export default AuthUseCase;