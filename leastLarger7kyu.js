function leastLarger(a,i) {
    const check = a[i];
    let greaters = [];
    
    a.forEach((elem, ind) => {
      if (elem > check) {
        greaters.push({
          value: elem,
          index: ind,
          diff: elem - check
        });
      }
    });
    
    const sortedOut = greaters.sort((a,b) => {
      return a.diff < b.diff ? -1 : a.diff > b.diff ? 1 : 0;
    });
    
    return sortedOut.length > 0 ? sortedOut[0].index : -1;
  }