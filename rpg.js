class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  displayDetails() {
    console.log(`The character named ${this.name} has ${this.health} health.`);
  }
}

let protagonist = new Character("Protagonist", 50);
let antagonist = new Character("Antagonist", 50);

class CharacterAction {
    //replace fireball and heal functions here
}

function fireball(amount, target) {
  target.health -= amount;
  return `You deal ${amount} damage!`;
}

function heal(amount, target) {
  target.health += amount;
  return `You heal ${amount} life!`;
}

console.log(fireball(5, antagonist));
console.log(heal(100, protagonist));

protagonist.displayDetails();
antagonist.displayDetails();