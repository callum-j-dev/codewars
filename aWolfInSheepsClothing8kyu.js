function warnTheSheep(queue) {
    let wolfIndex = queue.indexOf('wolf');
    let sheepIndex = queue.length - wolfIndex - 1;
    if (wolfIndex === queue.length - 1) {
      return 'Pls go away and stop eating my sheep';
    } else {
      return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
    }
  
  }