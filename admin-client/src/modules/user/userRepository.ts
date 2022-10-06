import { User } from "./models";

export interface UserRepository {
  getById(id: string): Promise<User>;
}

export class UserRepositoryImpl implements UserRepository {

  async getById(id: string): Promise<User> {
    console.log(id);
    throw 'TODO';
  }

}