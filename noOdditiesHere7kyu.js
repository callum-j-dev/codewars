function noOdds( values ){
    // Return all non-odd values
    let evens = [];
    
    values.forEach(value => {
      if (value %2 === 0) {
        evens.push(value);
      }
    });
    
    return evens;
  }