import AuthModel from "../models/AuthModel";

class AuthRepository {
  async save(authData: { domain: string; token: string; expiresAt: Date }) {
    return await AuthModel.create(authData);
  }

  async findByToken(token: string) {
    return await AuthModel.findOne({ token });
  }
}

export default new AuthRepository();
