function solve(arr) {
    let outArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!outArr.includes(arr[i])) {
        outArr.unshift(arr[i]);
      }
    }
    
    return outArr;
  }