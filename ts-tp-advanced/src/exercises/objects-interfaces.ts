// Exercice 4 : Objets & Interfaces
export interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}

export const user1: User = {
  id: 1,
  name: "Mohamed",
  isAdmin: false,
};

export interface Admin extends User {
  permissions: string[];
}

export const admin1: Admin = {
  id: 2,
  name: "Lina",
  email: "lina@example.com",
  isAdmin: true,
  permissions: ["manage_users", "edit_books"],
};
