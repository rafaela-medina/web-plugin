import { Request, Response } from "express";
import ListEventsUseCase from "@core/usecases/ListEventsUseCase";

const ListController = {
  async list(req: Request, res: Response): Promise<void> {
    try {
      const domain = req.query.domain as string;

      if (!domain) {
        res.status(400).json({ error: "Domain is required" });
        return;
      }

      const events = await ListEventsUseCase.execute(domain);
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  }
};

export default ListController;