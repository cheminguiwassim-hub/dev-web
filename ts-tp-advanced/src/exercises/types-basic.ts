// Exercice 2 : Types de base
export const name: string = "Amina";
export const age: number = 25;
export const isAdmin: boolean = false;

export const scores: number[] = [12, 15, 18];

export const student: [string, number] = ["Noor", 10];

export enum Role {
  User,
  Admin,
  SuperAdmin,
}

export const myRole: Role = Role.Admin;
