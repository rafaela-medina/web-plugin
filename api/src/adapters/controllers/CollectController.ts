import { Request, Response } from "express";
import CollectEventUseCase from "@core/usecases/CollectEventUseCase";

const CollectController = {
  async collect(req: Request, res: Response): Promise<void> {
    try {
      const { device, os, themeSwitchCount } = req.body;
      const domain = (req as any).user?.domain; // Obtendo o domínio do token JWT

      if (!device || !os || themeSwitchCount === undefined) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }

      const event = await CollectEventUseCase.execute({ domain, device, os, themeSwitchCount });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to collect data" });
    }
  }
};

export default CollectController;