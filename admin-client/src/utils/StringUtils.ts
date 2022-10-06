import { v4 } from "uuid";

export class StringUtils {
  static generateId(): string {
    return v4();
  }
}