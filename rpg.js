let startingHealth = 50;

function fireball (damage){
    startingHealth -= damage;
    return `You deal ${damage} damage!`;
}

function heal (health){
    startingHealth += health
    return `You heal ${health} life!`;
}

console.log(startingHealth);