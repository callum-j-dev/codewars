function isIntArray(arr) {
    if (arr === null || !Array.isArray(arr)) {
      return false;
    }
    
    if (arr.length === 0) {
      return true;
    }
    
    let intFlag = true;
    arr.forEach(num => {
      if (!Number.isInteger(num)) {
        intFlag = false;
      }
    });
    
    return intFlag;
  }