# Blog-3

## Why Type guards are necessary, various types of Type guards and their use cases

<h4 style="text-align: justify; font-weight: 1">
<i>Type</i> guards provide a mechanism to narrow down the types of variables. It allows us to write more predictable and error-free code.
</h4>

<br>

### Necessity of Type Guards

<h4 style="text-align: justify; font-weight: 1">
In TypeScript, we often deal with complex data structures and dynamic values, such as objects, arrays, and function parameters. Handling these dynamic values without type guards becomes challenging as TypeScript's static type system may not always accurately infer the types of variables. Type guards help address this challenge by providing runtime checks to validate and refine the types of variables which enhances type safety and code reliability.
</h4>

<br>

### Type guards and their use cases

### `typeof` Type Guards:

<h4 style="text-align: justify; font-weight: 1">
Use <code>typeof</code> to check the type of primitive values (e.g., <code>number</code>, <code>string</code>, <code>boolean</code>).
</h4>

```typescript
function inputType(value: unknown) {
  if (typeof value === "number") {
    console.log("Number:", value);
  } else if (typeof value === "string") {
    console.log("String:", value);
  } else {
    console.log("Unknown type:", value);
  }
}
```

<br>

### `instanceof` Type Guards:

<h4 style="text-align: justify; font-weight: 1">
Use <code>instanceof</code> to check if an object is an instance of a specific class.
</h4>

```typescript
class Animal {}
class Dog extends Animal {}

function isDog(animal: Animal) {
  return animal instanceof Dog;
}
```

<br>

### `Custom` Type Guards:

<h4 style="text-align: justify; font-weight: 1">
Define custom functions that return a boolean based on specific type conditions.
</h4>

```typescript
interface Car {
  make: string;
  model: string;
}

function isElectricCar(car: Car): car is Car & { electric: boolean } {
  return car.make === "Tesla" || car.make === "Nissan";
}
```
