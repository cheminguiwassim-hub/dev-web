import './hello';

// import exercices
import { name, age, isAdmin, scores, student, Role, myRole } from './exercises/types-basic';
import { id, strlenIfString } from './exercises/types-advanced';
import { user1, admin1 } from './exercises/objects-interfaces';
import { add, greet, power, combine } from './exercises/functions';
import { Person, Student, Circle, Rectangle, Car } from './exercises/oop';
import { identity, getFirst, Repository, ApiResponse } from './exercises/generics';
import * as mod from './exercises/modules';
import { Library } from './library/library';
import type { LibUser } from './library/models/user';

// Demo outputs
console.log('--- Demo TypeScript TP ---');
console.log('name', name, 'age', age, 'isAdmin', isAdmin);
console.log('scores', scores, 'student', student, 'Role.Admin', Role.Admin, myRole);
console.log('id example', id, 'strlenIfString("abc")', strlenIfString('abc'));

console.log('user1', user1, 'admin1', admin1);
console.log('add(2,3)=', add(2,3), 'greet', greet('Samir'), greet('Samir', 30));
console.log('power(3)=', power(3), 'combine(1,2)=', combine(1,2), 'combine("a","b")=', combine('a','b'));

const p = new Person('Youssef', 40);
const s = new Student('Nadia', 20, 'FST');
console.log(p.greet(), s.greet());

const c = new Circle(2);
const r = new Rectangle(3,4);
console.log('circle area', c.area(), 'rectangle area', r.area());

const car = new Car('Peugeot');
console.log(car.drive(12));

console.log('module add 4+5=', mod.add(4,5));

// Library demo
(async () => {
  const lib = new Library();
  await lib.initFromApi();
  console.log('Library books after init', lib.listAll());
  const user: LibUser = { id: 1, name: 'Student', role: 'User' };
  const ok = lib.borrow(1, user);
  console.log('Borrow book 1 by user ->', ok);
  console.log('After borrow, books', lib.listAll());
})();
