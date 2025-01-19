import jwt from "jsonwebtoken";

const AuthUseCase = {
  async execute(origin: string): Promise<string> {
    if (!process.env.JWT_SECRET) {
      throw new Error("Not able to generate token");
    }

    return jwt.sign({ origin }, process.env.JWT_SECRET, { expiresIn: "24h" });
  }
};

export default AuthUseCase;