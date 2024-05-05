{
  //! Polymorphism
  //* Polymorphism is like having a single name but many forms. It's the ability of different objects to be treated as objects of a common type. For example, imagine a function that takes different types of shapes (like circles, squares, or triangles) and can work with any of them without needing to know the specific type. That's polymorphism - the same function works with different types of objects because they share a common interface or base class.

  //* It's basically using a particular method of a Class in another Class where it's redesigned for using. Same method, different behavior

  //* Example-1
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  //* Example-2
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    //* Area of circle πr^2
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    //* Area of rectangle height * width
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape): void => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(12, 5);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
}
