import DomainModel from "../models/DomainModel";

class DomainRepository {
  async findByName(name: string) {
    return await DomainModel.findOne({ name });
  }

  async create(origin: { name: string; apiKey: string }) {
    return await DomainModel.create(origin);
  }
}

export default new DomainRepository();
