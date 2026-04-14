class Character {
  static instances = [];

constructor(name, level, actionOne = null, actionTwo = null) {
  this.name = name;
  this.level = level;
  this.health = level * 10;

  this.actionOne = actionOne ? actionOne.bind(this) : null;
  this.actionTwo = actionTwo ? actionTwo.bind(this) : null;

  this.actionOneName = actionOne ? actionOne.name : null;
  this.actionTwoName = actionTwo ? actionTwo.name : null;

  Character.instances.push(this);
}

  displayDetails() {
    if (this.actionTwo !== null){
      console.log(`The character named ${this.name} is level ${this.level} and has ${this.health} health. Their abilities are ${this.actionOneName} and ${this.actionTwoName}.`);
    } else {
      console.log(`The character named ${this.name} is level ${this.level} and has ${this.health} health. Their ability is ${this.actionOneName}.`);
    }
  }

  static callAll(methodName) {
    Character.instances.forEach(instance => instance[methodName]());
  }
}

let protagonist = new Character("Protagonist", 2, heal, fireball);
let antagonist = new Character("Antagonist", 1, fireball);
let blizzardWizard = new Character("blizzardWizard", 4, blizzard);

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

  const results = Character.instances.map(instance => {
    instance.health -= amount;
    return `${instance.name} takes ${amount} damage, ${instance.health} health remaining!`;
  });

  return results.join("\n");
}

console.log(antagonist.actionOne(protagonist));
console.log(protagonist.actionOne(antagonist));
console.log(blizzardWizard.actionOne());

protagonist.displayDetails();
antagonist.displayDetails();
blizzardWizard.displayDetails();