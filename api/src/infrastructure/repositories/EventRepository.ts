import EventModel from "../models/EventModel";

class EventRepository {
  async save(eventData: {
    origin: string;
    device: string;
    os: string;
    themeSwitchCount: number;
  }) {
    return await EventModel.create(eventData);
  }

  async list(origin: string) {
    return await EventModel.find({ origin }).sort({ timestamp: -1 }).limit(20);
  }
}

export default new EventRepository();
