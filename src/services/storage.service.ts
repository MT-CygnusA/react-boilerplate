export class StorageService {

  static get<T>(key: string): T | null {
    const item = window.localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item) as T;
  }

  static set<T>(key: string, value: T) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
