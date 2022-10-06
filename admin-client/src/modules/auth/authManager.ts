import { LoggerService } from "../../core/services/LoggerService";
import { User } from "../user/models";
import { UserRepository } from "../user/userRepository";
import { AuthRepository } from "./authRepository";
import { map, Observable } from "rxjs";

export interface AuthManager {
  isLoggedIn(): Observable<boolean>;
  login(email: string, password: string): Promise<User>;
  forgotPassword(email: string): Promise<void>;
  logout(): Promise<void>;
}

export class AuthManagerImpl implements AuthManager {
  constructor(
    private readonly logger: LoggerService,
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
  ) { }

  isLoggedIn() {
    return this.authRepository.loggedInUserId.pipe(map(id => !!id));
  }

  async login(email: string, password: string): Promise<User> {
    const userId = await this.authRepository.login(email, password);
    return await this.userRepository.getById(userId);
  }

  async forgotPassword(email: string): Promise<void> {
    return await this.authRepository.sendForgotPasswordEmail(email);
  }

  async logout(): Promise<void> {
    try {
      const loggedOut = await this.authRepository.logout();
      if (!loggedOut) throw 'Unable to logout';
    } catch (e) {
      throw 'Unable to logout';
    }
  }
}