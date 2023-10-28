//complete this code
class Animal {
  constructor(species) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("Purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
