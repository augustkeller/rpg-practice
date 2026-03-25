class Character {
  constructor(name, level, actionOne = null, actionTwo = null) {
    this.name = name;
    this.level = level;
    this.health = (level*50);
    this.actionOne = actionOne;
    this.actionTwo = actionTwo;
  }

  displayDetails() {
    console.log(`The character named ${this.name} has ${this.health} health.`);
  }
}

let protagonist = new Character("Protagonist", 1, heal);
let antagonist = new Character("Antagonist", 1, fireball);

function fireball(target) {
  amount = (this.level*5);
  target.health -= amount;
  return `${this.name} deals ${amount} damage to ${target.name}!`;
}

function heal(target) {
  amount = (this.level*5);
  target.health += amount;
  return `${this.name} heals ${amount} life to ${target.name}!`;
}

console.log(antagonist.actionOne(5, protagonist));
console.log(protagonist.actionOne(100, antagonist));

protagonist.displayDetails();
antagonist.displayDetails();