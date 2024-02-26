function declareWinner(fighter1, fighter2, firstAttacker) {
    let firstFighter;
    let lastFighter;
    
    if (fighter1.name === firstAttacker) {
      firstFighter = fighter1;
      lastFighter = fighter2;
    } else {
      firstFighter = fighter2;
      lastFighter = fighter1;
    }
    
    while (!isOver(firstFighter, lastFighter)) {
      // first attack
      attack(firstFighter, lastFighter);
      if (isOver(firstFighter, lastFighter)) {
        return firstFighter.name;
      }
      
      //second attack
      attack(lastFighter, firstFighter);
      if (isOver(firstFighter, lastFighter)) {
        return lastFighter.name;
      }
    }
    
    
  }
  
  function attack(fighter1, fighter2) {
    fighter2.health -= fighter1.damagePerAttack;
  }
  
  function isOver(fighter1, fighter2) {
    return fighter1.health <= 0 || fighter2.health <= 0;
  }