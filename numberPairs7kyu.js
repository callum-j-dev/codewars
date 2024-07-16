function getLargerNumbers(a, b) {
    let largest = [];
    
    a.forEach((num, ind) => {
      largest.push(Math.max(num, b[ind]));
    });
    
    return largest;
  }