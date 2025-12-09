// Exercice 3 : Types avancés
export let id: number | string = 42;
id = "42-string";

type A = { a: string };
type B = { b: number };
export type AB = A & B;

export type Status = "pending" | "done" | "canceled";

export let unknownValue: unknown = "hello";
export function strlenIfString(v: unknown): number | undefined {
  if (typeof v === "string") {
    return (v as string).length;
  }
  return undefined;
}
