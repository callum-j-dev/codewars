function sumOfMinimums(arr) {
    // your code here
    return arr.reduce((sum, current) => sum + arrMin(current), 0);
  }
  
  function arrMin(array) {
    return Math.min(...array);
  }