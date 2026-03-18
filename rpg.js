let protagonist = { name: "protagonist", health: 50 };
let antagonist = { name: "antagonist", health: 50 };

function fireball(amount, target) {
  target.health -= amount;
  return `You deal ${amount} damage!`;
}

function heal(amount, target) {
  target.health += amount;
  return `You heal ${amount} life!`;
}

fireball(5, antagonist);
heal(100, protagonist);

console.log(protagonist);
console.log(antagonist);