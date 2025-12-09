import type { Book } from '../models/book';

// service API fictif
export async function fetchBooks(): Promise<Book[]> {
  // Simule un appel réseau
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Le Petit Prince', author: 'Saint-Exupéry', year: 1943, available: true },
        { id: 2, title: '1984', author: 'George Orwell', year: 1949, available: true },
        { id: 3, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, available: false },
      ]);
    }, 200);
  });
}
