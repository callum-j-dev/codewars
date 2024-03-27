function cubeOdd(arr) {
    let nanFlag = false;
    arr.forEach(elem => {
      if (typeof elem !== 'number') {
        nanFlag = true;
      }
    })
    
    if (nanFlag) {
      return undefined;
    }
  
  // insert code here >.<
    let cubes = arr.map(num => num ** 3);
    let odds = cubes.filter(num => num % 2 !== 0);
    
    return odds.reduce((total, current) => total + current, 0);
  }