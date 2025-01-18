import jwt from "jsonwebtoken";
import { Domain } from "../entities/Domain";

class AuthService {
  static generateToken(domain: Domain): string {
    return jwt.sign({ domain: domain.name }, process.env.JWT_SECRET as string, {
      expiresIn: "10m",
    });
  }
}

export default AuthService;
