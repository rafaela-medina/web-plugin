import EventRepository from "../../infrastructure/repositories/EventRepository";

class ListUseCase {
  async list(domain: string) {
    return await EventRepository.list(domain);
  }
}

export default new ListUseCase();
