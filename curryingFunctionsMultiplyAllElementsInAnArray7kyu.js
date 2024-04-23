function multiplyAll(arr) {
    const multArr = (multiplier) => {
      return arr.map(num => num * multiplier);
    }
    
    return multArr;
  }