function sentence(arrayOfObjects) {
    let sorted = arrayOfObjects.sort((a, b) => {
      const indA = parseInt(Object.keys(a)[0]);
      const indB = parseInt(Object.keys(b)[0]);
      
      return indA > indB ? 1 : -1;
    });
    
    let outArr = sorted.map(obj => {
      return Object.values(obj)[0];
    });
    
    return outArr.join(' ');
  }