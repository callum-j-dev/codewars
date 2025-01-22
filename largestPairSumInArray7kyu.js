function largestPairSum (numbers) {
    //TODO: Write your Code here
    console.log(numbers);
    let biggest = Math.max(...numbers);
    console.log(biggest);
    
    let firstInd = numbers.indexOf(biggest);
    console.log(firstInd);
    
    numbers.splice(firstInd, 1);
    
    let secondBiggest = Math.max(...numbers);
    
    return biggest + secondBiggest;
    
  //   let noBiggest = numbers.splice(firstInd, 1);
  //   console.log(noBiggest);
    
  //   let secondBiggest = Math.max(...noBiggest);
  //   console.log(secondBiggest);
  //   console.log(numbers);
    
    return biggest + secondBiggest;
    
  }