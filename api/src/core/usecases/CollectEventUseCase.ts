import EventRepository from "../../infrastructure/repositories/EventRepository";

class CollectEventUseCase {
  async execute(eventData: { domain: string; device: string; os: string; themeSwitchCount: number }) {
    return await EventRepository.save(eventData);
  }
}

export default new CollectEventUseCase();