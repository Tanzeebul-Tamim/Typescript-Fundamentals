{
  //! Inheritance
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      //* When a value is received that is a property of the parent class, super() helps to communicate with the parent class. The parameters of the method receives the value and sends to the constructor of the parent class
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass} classes`);
    }
  }

  const student = new Student("Tanzeebul Tamim", 22, "Dhaka");
  const teacher = new Teacher("Mezbaul Abedin", 32, "Chittagong", "Instructor");
}
