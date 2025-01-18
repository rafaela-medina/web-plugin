import { Request, Response } from "express";
import AuthService from "../../core/usecases/AuthService";

const AuthController = {
  authenticate(req: Request, res: Response) {
    const { domain } = req.body;

    if (!domain)
      return res.status(400).json({ error: "Domínio é obrigatório" });

    const token = AuthService.generateToken({ name: domain, apiKey: "" });
    return res.json({ token });
  },
};

export default AuthController;
