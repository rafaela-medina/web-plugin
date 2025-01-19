import { Request, Response } from "express";
import CollectEventUseCase from "@core/usecases/CollectEventUseCase";

const CollectController = {
  async collect(req: Request, res: Response): Promise<void> {
    try {
      const { device, os, themeSwitchCount } = req.body;
      const origin = (req as any).user?.origin;

      const event = await CollectEventUseCase.execute({
        origin,
        device,
        os,
        themeSwitchCount,
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to collect data" });
    }
  },
};

export default CollectController;
