import EventModel from "../models/EventModel";

class EventRepository {
  async save(eventData: {
    domain: string;
    device: string;
    os: string;
    themeSwitchCount: number;
  }) {
    return await EventModel.create(eventData);
  }

  async list(domain: string) {
    return await EventModel.find({ domain }).sort({ timestamp: -1 }).limit(20);
  }
}

export default new EventRepository();
