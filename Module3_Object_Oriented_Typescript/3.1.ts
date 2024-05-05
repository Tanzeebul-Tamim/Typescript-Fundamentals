{
  //! Class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //* Parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }

    //* Must be used regular function as arrow function doesn't support "this" statements
    makeSound() {
      console.log(`The ${this.name} ${this.sound}s`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Bark");
  const cat = new Animal("Persian", "Cat", "Meow");

  dog.makeSound();
}
