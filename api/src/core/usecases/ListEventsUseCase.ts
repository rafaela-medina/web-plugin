import EventRepository from "../../infrastructure/repositories/EventRepository";

class ListEventsUseCase {
  async execute(domain: string) {
    return await EventRepository.list(domain);
  }
}

export default new ListEventsUseCase();