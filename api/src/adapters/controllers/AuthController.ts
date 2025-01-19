import { Request, Response } from "express";
import AuthUseCase from "@core/usecases/AuthUseCase";

const AuthController = {
  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { origin } = req.body;

      if (!origin) {
        res.status(400).json({ error: "Origin is required" });
        return;
      }

      const token = await AuthUseCase.execute(origin);
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Authentication failed" });
    }
  }
};

export default AuthController;