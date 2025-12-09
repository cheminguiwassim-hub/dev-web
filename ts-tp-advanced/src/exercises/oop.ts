// Exercice 6 : POO
export class Person {
  constructor(public name: string, public age: number) {}
  greet(): string {
    return `Bonjour, je suis ${this.name} (${this.age} ans)`;
  }
}

export class Student extends Person {
  constructor(name: string, age: number, public school: string) {
    super(name, age);
  }
}

export abstract class Shape {
  abstract area(): number;
}

export class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

export interface Drivable {
  drive(distance: number): string;
}

export class Car implements Drivable {
  constructor(public model: string) {}
  drive(distance: number): string {
    return `${this.model} drove ${distance}km`;
  }
}
