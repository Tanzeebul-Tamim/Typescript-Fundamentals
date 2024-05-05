{
  //! type guards/type narrowing
  //* instance of

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeow() {
      console.log("I am meowing");
    }
  }

  const isDog = (animal: Animal): animal is Dog => {
    //* animal is Dog is a specific type of boolean where it's checking for if animal is an instance of Dog or not, and thus returns a boolean value either true of false depending on the "animal" parameter
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  //* Classes can also be used as types
  const getAnimal = (animal: Animal) => {
    //* Here the "Animal" parameter is an instance
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("German Shepard", "Dog");
  const cat = new Cat("Persian", "Cat");

  dog.makeBark();
  cat.makeMeow();

  getAnimal(cat);
}
