import { Constants } from "./constants";
import { AuthManager, AuthManagerImpl } from "./modules/auth/authManager";
import { AuthRepository, AuthRepositoryImpl } from "./modules/auth/authRepository";
import { PropertyManager, PropertyManagerImpl } from "./modules/property/propertyManager";
import { PropertyRepository, PropertyRepositoryImpl } from "./modules/property/propertyRepository";
import { UserManager, UserManagerImpl } from "./modules/user/userManager";
import { UserRepository, UserRepositoryImpl } from "./modules/user/userRepository";
import { LocalStorageService, LocalStorageServiceImpl } from "./core/services/LocalStorageService";
import { DevLoggerService, LoggerService, ProdLoggerService } from "./core/services/LoggerService";
import { FileService, FileServiceImpl } from "./core/services/FileService";

export class Injector {
  static loggerService: LoggerService = Constants.isDevMode
    ? new DevLoggerService()
    : new ProdLoggerService();
  static localStorageService: LocalStorageService = new LocalStorageServiceImpl();
  static fileService: FileService = new FileServiceImpl();

  static userRepository: UserRepository = new UserRepositoryImpl();
  static userManager: UserManager = new UserManagerImpl(this.loggerService, this.userRepository);

  static authRepository: AuthRepository = new AuthRepositoryImpl();
  static authManager: AuthManager = new AuthManagerImpl(this.loggerService, this.authRepository, this.userRepository);


  static propertyRepository: PropertyRepository = new PropertyRepositoryImpl();
  static propertyManager: PropertyManager = new PropertyManagerImpl(this.propertyRepository, this.fileService);

}