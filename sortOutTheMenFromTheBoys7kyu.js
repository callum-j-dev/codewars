function menFromBoys(arr){
    //your code here
    const boys = arr.filter(num => num %2 === 0).sort((a, b) => a - b);
    const men = arr.filter(num => num %2 !== 0).sort((a, b) => b - a);
    
    const combined = boys.concat(men);
    
    const unique = [...new Set(combined)];
    
    return unique;
  }