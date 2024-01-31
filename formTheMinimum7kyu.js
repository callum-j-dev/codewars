function minValue(values){
    //your code here
    let uniques = [];
    values.forEach(value => {
      if (!uniques.includes(value)) {
        uniques.push(value);
      }
    });
    
    let sorted = uniques.sort((a, b) => a - b);
    
    return Number(sorted.join(''));
  }