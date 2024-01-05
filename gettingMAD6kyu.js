function gettingMad(array) {
    let minDiff = Math.abs(array[0] - array[1]);
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j) {
          let diff = Math.abs(array[i] - array[j]);
          minDiff = Math.min(minDiff, diff);
        }
      }
    }
    
    return minDiff;
  }