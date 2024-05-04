function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    return max % min;
  }