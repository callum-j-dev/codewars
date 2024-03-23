function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Code here
    let total = 1;
    for (let i = 0; i < power; i++) {
      total *= number;
    }
    
    return total;
  }