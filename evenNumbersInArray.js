function evenNumbers(array, number) {
    // good luck
    let evens = array.filter(n => n % 2 === 0);
    return evens.slice(-number);
  }