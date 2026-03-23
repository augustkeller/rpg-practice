class Character {
  constructor(name, health, action) {
    this.name = name;
    this.health = health;
    this.action = action;
  }

  displayDetails() {
    console.log(`The character named ${this.name} has ${this.health} health.`);
  }
}

let protagonist = new Character("Protagonist", 50, heal);
let antagonist = new Character("Antagonist", 50, fireball);

function fireball(amount, target) {
  target.health -= amount;
  return `You deal ${amount} damage to ${target.name}!`;
}

function heal(amount, target) {
  target.health += amount;
  return `You heal ${amount} life to ${target.name}!`;
}

console.log(fireball(5, antagonist));
console.log(heal(100, protagonist));

protagonist.displayDetails();
antagonist.displayDetails();