function lowestProduct(input) {
    if (input.length < 4) {
      return 'Number is too small';
    }
    
    let inputArr = input.split('');
    let numArr = inputArr.map(digit => Number(digit));
    
    if (numArr.length === 4) {
      return prodFour(numArr, 0, 4);
    }
    
    let min = prodFour(numArr, 0, 4);
    numArr.forEach((num, index) => {
      if (index < numArr.length - 3) {
        min = Math.min(min, prodFour(numArr, index, index + 4));
      }
    });
    
    return min;
  }
  
  function prodFour(arr, start, end) {
    let subArr = arr.slice(start, end);
    return subArr.reduce((product, current) => product * current, 1);
  }