function combat(health, damage) {
    // Write your code here
    let newHealth = health - damage;
    
    return newHealth >= 0 ? newHealth : 0;
  }