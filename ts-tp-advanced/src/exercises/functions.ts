// Exercice 5 : Fonctions
export function add(a: number, b: number): number {
  return a + b;
}

export function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Bonjour ${name}, tu as ${age} ans.`;
  }
  return `Bonjour ${name}!`;
}

export function power(base: number, exp: number = 2): number {
  return base ** exp;
}

// overloads: combine
export function combine(a: number, b: number): number;
export function combine(a: string, b: string): string;
export function combine(a: any, b: any): any {
  return a + b;
}
