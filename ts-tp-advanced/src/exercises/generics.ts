// Exercice 7 : Génériques
export function identity<T>(value: T): T {
  return value;
}

export function getFirst<T>(arr: T[]): T {
  return arr[0];
}

export class Repository<T extends { id: number }> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  remove(id: number): void {
    this.items = this.items.filter((it) => it.id !== id);
  }
  getAll(): T[] {
    return [...this.items];
  }
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
