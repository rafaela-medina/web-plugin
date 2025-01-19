import { Request, Response } from "express";
import ListEventsUseCase from "@core/usecases/ListEventsUseCase";

const ListController = {
  async list(req: Request, res: Response): Promise<void> {
    try {
      const origin = req.query.origin as string;

      if (!origin) {
        res.status(400).json({ error: "Origin is required" });
        return;
      }

      const events = await ListEventsUseCase.execute(origin);
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  }
};

export default ListController;