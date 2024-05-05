//! Static

//* Regular method, uses different memory locations and not useful for implementing the calculations of a counter
{
  class Counter {
    count: number = 0;

    increment() {
      return (this.count += 1);
    }

    decrement() {
      return (this.count -= 1);
    }
  }

  //* Even if you add increment 2 times, you will get the same result as the first one in the second one as well
  const instance1 = new Counter(); //* Allocated in a specific memory
  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment());

  const instance2 = new Counter(); //* Allocated in a different memory
  console.log(instance2.increment());
  console.log(instance2.increment());
}

//* Static method, uses the same memory location and useful for implementing the calculations of a counter
{
  class Counter {
    static count: number = 0;

    increment() {
      //* While using static, instead of "this", you need to mention the name of the class and then access it's property
      return (Counter.count += 1);
    }

    decrement() {
      return (Counter.count -= 1);
    }

    static staticIncrement() {
      //* Methods can be static as well
      return (Counter.count += 1);
    }
  }

  //* The increment and decrement methods will work as expected, updating the previous value, no matter which instance you use
  const instance1 = new Counter(); //* Allocated in a specific memory
  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment());

  const instance2 = new Counter(); //* Allocated in the same memory
  console.log(instance2.increment());
  console.log(instance2.increment());

  //* Using static method (This one's also allocated in the same memory)
  //* No need to declare an instance. You need to call the method using the Class name
  console.log(Counter.staticIncrement());
}
