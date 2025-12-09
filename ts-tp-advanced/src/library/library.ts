import type { Book } from './models/book';
import type { LibUser } from './models/user';
import { GenericRepository } from './repository';
import { fetchBooks } from './services/api';

export class Library {
  private books = new GenericRepository<Book>();
  constructor() {}

  async initFromApi() {
    const list = await fetchBooks();
    list.forEach((b) => this.books.add(b));
  }

  addBook(book: Book) {
    this.books.add(book);
  }
  removeBook(id: number) {
    this.books.remove(id);
  }
  find(title: string): Book[] {
    return this.books.getAll().filter((b) => b.title.toLowerCase().includes(title.toLowerCase()));
  }
  borrow(bookId: number, user: LibUser): boolean {
    const b = this.books.findById(bookId);
    if (!b || !b.available) return false;
    b.available = false;
    return true;
  }
  returnBook(bookId: number) {
    const b = this.books.findById(bookId);
    if (b) b.available = true;
  }
  listAll(): Book[] {
    return this.books.getAll();
  }
}
