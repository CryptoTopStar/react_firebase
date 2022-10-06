export interface LocalStorageService {
  getString(key: string): string | undefined;
}

export class LocalStorageServiceImpl implements LocalStorageService {
  getString(key: string): string | undefined {
    console.log(key);
    return undefined;
  }
}
