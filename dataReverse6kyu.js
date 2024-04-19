function dataReverse(data) {
    // Your code here
    let dataToSplice = data;
    let arrayOfArrays = [];
    
    while (dataToSplice.length > 0) {
      arrayOfArrays.push(dataToSplice.splice(0, 8));
    }
    
    arrayOfArrays.reverse();
    let reversedArray = [];
    
    arrayOfArrays.forEach(arr => {
      reversedArray = reversedArray.concat(arr);
    });
    
    
    return reversedArray;
  }