import DomainModel from "../models/DomainModel";

class DomainRepository {
  async findByName(name: string) {
    return await DomainModel.findOne({ name });
  }

  async create(domain: { name: string; apiKey: string }) {
    return await DomainModel.create(domain);
  }
}

export default new DomainRepository();
