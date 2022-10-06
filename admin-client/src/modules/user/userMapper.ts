import { User } from "./models";

export class UserMapper {

  static fromJson(json: any): User {
    return {
      id: json.id,
      name: json.name,
      email: json.email,
      role: json.email,
    };
  }

}