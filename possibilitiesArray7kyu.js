function isAllPossibilities(x){
    const length = x.length;
    const poss = [];
    for (let i = 0; i < length; i++)  {
      poss.push(i);
    }
    
    const sorted = x.sort((a,b) => a - b);
    
    return JSON.stringify(sorted) === JSON.stringify(poss);
  }