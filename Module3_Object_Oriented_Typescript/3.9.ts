//! Abstraction
//* Abstraction in TypeScript is about hiding complex details and showing only the essential parts. It's like using a TV remote without needing to know how the TV works inside. In programming, abstraction helps us focus on what something does rather than how it's done. For example, we might use a function to calculate the average of numbers without needing to understand the mathematical operations behind it. Abstraction makes our code easier to understand and maintain by hiding unnecessary complexity.

//! Using interface
{
  //* We get the idea from here
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vehicle1: Vehicle1 = {
  //   name: "Toyota",
  //   model: 2000,
  // };

  //* You cannot annotate type to a Class in the regular way (wrong: class Car: Vehicle{}). For that "implements" keyword needs to be used
  //* Real implementation
  class Car implements Vehicle {
    //* You must use all the properties that are defined in the interface
    startEngine(): void {
      console.log("I am starting the car engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car engine");
    }

    move(): void {
      console.log("I am driving the car");
    }

    //* Also lets you declare extra methods that aren't present in the interface/type
    test() {
      console.log("I am testing");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
}

//! Using abstraction class
{
  //* An abstract class in TypeScript is like a template for other classes. It outlines what methods and properties they should have but can't be directly used on its own. It's a way to enforce a common structure among related classes.

  //* In other words, we're using an abstract class instead of an interface/type

  //* We get the idea from here
  abstract class Car {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log("I am testing");
    }
  }

  //* You can follow the abstract class as a model but cannot create an instance from it
  // const hondaCar = new Car();

  //* Making another class that extends the abstract class (Following the model class)
  //* Real implementation
  class Toyota extends Car {
    startEngine(): void {
      console.log("I am starting the car engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car engine");
    }

    move(): void {
      console.log("I am driving the car");
    }
  }
}
