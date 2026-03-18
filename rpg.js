let protagonist = { health: 50 };
let antagonist = { health: 50 };

function fireball(damage, target) {
  target.health -= damage;
  return `You deal ${damage} damage!`;
}

function heal(amount, target) {
  target.health += amount;
  return `You heal ${amount} life!`;
}

fireball(5, antagonist);
heal(100, protagonist);

console.log(protagonist.health);
console.log(antagonist.health);