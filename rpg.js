class Character {
  constructor(name, health, actionOne, actionTwo = null) {
    this.name = name;
    this.health = health;
    this.actionOne = actionOne;
    this.actionTwo = actionTwo;
  }

  displayDetails() {
    console.log(`The character named ${this.name} has ${this.health} health.`);
  }
}

let protagonist = new Character("Protagonist", 50, heal);
let antagonist = new Character("Antagonist", 50, fireball);

function fireball(amount, target) {
  target.health -= amount;
  return `${this.name} deals ${amount} damage to ${target.name}!`;
}

function heal(amount, target) {
  target.health += amount;
  return `${this.name} heals ${amount} life to ${target.name}!`;
}

console.log(antagonist.action(5, protagonist));
console.log(protagonist.action(100, antagonist));

protagonist.displayDetails();
antagonist.displayDetails();