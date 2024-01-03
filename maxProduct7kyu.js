function adjacentElementsProduct(array) {
    // max product
    let currentMax = array[0] * array[1];
    for (let i = 1; i < array.length; i++) {
      let prod = array[i - 1] * array[i];
      if (prod > currentMax) {
        currentMax = prod;
      }
    }
    
    return currentMax;
  }