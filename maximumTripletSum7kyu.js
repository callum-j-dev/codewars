function maxTriSum(numbers){
    //your code here
    let uniques = [];
    numbers.forEach(num => {
      if (!uniques.includes(num)) {
        uniques.push(num);
      }
    });
    
    let sorted = uniques.sort((a, b) => b - a);
    return sorted[0] + sorted[1] + sorted[2];
  }