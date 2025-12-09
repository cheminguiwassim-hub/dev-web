import type { Book } from './models/book';
import type { LibUser } from './models/user';

export class GenericRepository<T extends { id: number }> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
  remove(id: number) {
    this.items = this.items.filter((i) => i.id !== id);
  }
  getAll(): T[] {
    return [...this.items];
  }
  findById(id: number): T | undefined {
    return this.items.find((i) => i.id === id);
  }
}
