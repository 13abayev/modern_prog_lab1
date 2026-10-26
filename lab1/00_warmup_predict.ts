// Lab 1 WARM-UP
// Tool: TypeScript Playground
class Animal { name = "animal"; }
class Dog extends Animal { bark() { return "woof"; } }
class Cat extends Animal { meow() { return "meow"; } }

// CASE 1 - a function that receives a string or null
function shout(s: string | null) {
  return s.toUpperCase();
}

// CASE 2 - a Dog[] used as an Animal[]
const dogs: Dog[] = [new Dog()];
const animals: Animal[] = dogs;
animals.push(new Cat());
const second = dogs[1];

// CASE 3 - the first element of an empty array
const cities: string[] = [];
const firstCity = cities[0];

// ---- each case runs separately, so one crash does not hide the others ----
function attempt(label: string, f: () => unknown) {
  try { console.log(label, "->", f()); }
  catch (e) { console.log(label, "-> RUN-TIME ERROR:", String(e)); }
}
attempt("CASE 1  shout(null)     ", () => shout(null));
attempt("CASE 2  second.bark()   ", () => second.bark());
attempt("CASE 3  firstCity.length", () => firstCity.length);

// ---- answers --------------------------------------------------------------------
// CASE 1 - REJECTED by the compiler: 's' is possibly 'null'. With strictNullChecks,
//          null is its own type, so  string | null  has no  toUpperCase  until we
//          narrow it. Run anyway, it crashes: Cannot read properties of null.
// CASE 2 - compiles, CRASHES at run time: second.bark is not a function.
//          Arrays are covariant in TypeScript (Dog[] is accepted as Animal[]), but a
//          mutable array is also written to, so the Cat gets into the Dog[] through
//          the alias. Unsound by design, for convenience.
// CASE 3 - compiles, CRASHES at run time: Cannot read properties of undefined.
//          cities[0] is typed  string , but an empty array returns undefined.
//          The option  noUncheckedIndexedAccess  makes it  string | undefined .
// Lesson: "no red underline" is not "safe". Cases 2 and 3 are holes in the type system.
