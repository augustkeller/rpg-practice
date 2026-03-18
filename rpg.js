let protagonistHealth = 50;
let antagonistHealth = 50;

function fireball (damage, target){
    protagonistHealth -= damage;
    return `You deal ${damage} damage!`;
}

function heal (health, target){
    protagonistHealth += health
    return `You heal ${health} life!`;
}

fireball(5);
heal(100);

console.log(protagonistHealth);
console.log(antagonistHealth);