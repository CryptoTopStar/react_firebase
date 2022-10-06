import { Constants } from "../../constants";

export interface LoggerService {
  d(clazz: typeof Object, message?: unknown, exception?: unknown): void;
  e(clazz: typeof Object, message?: unknown, exception?: unknown): void;
}

export class DevLoggerService implements LoggerService {
  d(clazz: typeof Object, message?: unknown, exception?: unknown): void {
    console.log(`TAG=${clazz.constructor.name}\nMESSAGE=${message}\nEXCEPTION=${exception}`);
  }
  e(clazz: typeof Object, message?: unknown, exception?: unknown): void {
    console.error(`TAG=${clazz.constructor.name}\nMESSAGE=${message}\nEXCEPTION=${exception}`);
  }
}

export class ProdLoggerService implements LoggerService {
  d(clazz: typeof Object, message?: unknown, exception?: unknown): void {
    if (Constants.isDevMode) return;
    console.log(`TAG=${clazz.constructor.name}\nMESSAGE=${message}\nEXCEPTION=${exception}`);
  }
  e(clazz: typeof Object, message?: unknown, exception?: unknown): void {
    console.error(`TAG=${clazz.constructor.name}\nMESSAGE=${message}\nEXCEPTION=${exception}`);
  }
}
