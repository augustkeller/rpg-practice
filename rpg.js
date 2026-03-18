let protagonistHealth = 50;

function fireball (damage){
    protagonistHealth -= damage;
    return `You deal ${damage} damage!`;
}

function heal (health){
    protagonistHealth += health
    return `You heal ${health} life!`;
}

fireball(5);
heal(100);

console.log(protagonistHealth);