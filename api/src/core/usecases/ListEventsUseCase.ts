import EventRepository from "../../infrastructure/repositories/EventRepository";

class ListEventsUseCase {
  async execute(origin: string) {
    return await EventRepository.list(origin);
  }
}

export default new ListEventsUseCase();