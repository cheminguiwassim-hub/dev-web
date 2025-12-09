export type Role = 'User' | 'Admin';

export interface LibUser {
  id: number;
  name: string;
  role: Role;
}
