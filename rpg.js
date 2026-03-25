class Character {
  constructor(name, level, actionOne = null, actionTwo = null) {
    this.name = name;
    this.level = level;
    this.health = (level*10);
    this.actionOne = actionOne;
    this.actionTwo = actionTwo;
  }

  displayDetails() {
    if (this.actionTwo !== null){
      console.log(`The character named ${this.name} is level ${this.level} and has ${this.health} health. Their abilities are ${this.actionOne.name} and ${this.actionTwo.name}.`);
    } else {
      console.log(`The character named ${this.name} is level ${this.level} and has ${this.health} health. Their ability is ${this.actionOne.name}.`);
    }
  }
}

let protagonist = new Character("Protagonist", 2, heal);
let antagonist = new Character("Antagonist", 1, fireball);

function fireball(target) {
  amount = (this.level*2);
  target.health -= amount;
  return `${this.name} deals ${amount} damage to ${target.name}!`;
}

function heal(target) {
  amount = (this.level*2);
  target.health += amount;
  return `${this.name} heals ${amount} life to ${target.name}!`;
}

console.log(antagonist.actionOne(protagonist));
console.log(protagonist.actionOne(antagonist));

protagonist.displayDetails();
antagonist.displayDetails();