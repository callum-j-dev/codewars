function minSum(arr) {
    // your code here
    let sorted = arr.sort((a, b) => a - b);
    let sum = 0;
    while (sorted.length > 0) {
      let little = sorted.shift();
      let big = sorted.pop();
      
      sum += (little * big);
    }
    
    return sum;
  }