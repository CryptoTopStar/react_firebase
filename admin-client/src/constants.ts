export class Constants {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static env = (import.meta as any).env;
  static isDevMode = this.env.DEV;
}