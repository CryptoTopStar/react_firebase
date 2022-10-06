import { Observable } from "rxjs";
import { LoggerService } from "../../core/services/LoggerService";
import { User } from "./models";
import { UserRepository } from "./userRepository";

export interface UserManager {
  getCurrentUser(): Observable<User>;
}

export class UserManagerImpl implements UserManager {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
  ) { }

  getCurrentUser(): Observable<User> {
    throw 'TODO';
  }
}