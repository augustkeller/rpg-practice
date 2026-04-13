class Character {
  static instances = [];

  constructor(name, level, actionOne = null, actionTwo = null) {
    this.name = name;
    this.level = level;
    this.health = level * 10;

    this.actionOne = actionOne ? actionOne.bind(this) : null;
    this.actionTwo = actionTwo ? actionTwo.bind(this) : null;

    Character.instances.push(this);
  }

  displayDetails() {
    if (this.actionTwo !== null){
      console.log(`The character named ${this.name} is level ${this.level} and has ${this.health} health. Their abilities are ${this.actionOne.name} and ${this.actionTwo.name}.`);
    } else {
      console.log(`The character named ${this.name} is level ${this.level} and has ${this.health} health. Their ability is ${this.actionOne.name}.`);
    }
  }

  static callAll(methodName) {
    Character.instances.forEach(instance => instance[methodName]());
  }
}

let protagonist = new Character("Protagonist", 2, heal, fireball);
let antagonist = new Character("Antagonist", 1, fireball);

function fireball(target) {
  let amount = (this.level*2);
  target.health -= amount;
  return `${this.name} deals ${amount} damage to ${target.name}!`;
}

function heal(target) {
  let amount = (this.level*2);
  target.health += amount;
  return `${this.name} heals ${amount} life to ${target.name}!`;
}

function blizzard() {
  let amount = this.level / 2;

  Character.instances.forEach(instance => {
    instance.health -= amount;
    console.log(`${instance.name} takes ${amount} damage, ${instance.health} health remaining!`);
  });
}

console.log(antagonist.actionOne(protagonist));
console.log(protagonist.actionOne(antagonist));

protagonist.displayDetails();
antagonist.displayDetails();