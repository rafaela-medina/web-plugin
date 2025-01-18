import EventRepository from "../../infrastructure/repositories/EventRepository";

class CollectUseCase {
  async collect(eventData: {
    domain: string;
    device: string;
    os: string;
    themeSwitchCount: number;
  }) {
    return await EventRepository.save(eventData);
  }
}

export default new CollectUseCase();
