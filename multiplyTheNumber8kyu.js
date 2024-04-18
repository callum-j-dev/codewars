function multiply(number){
    //your code here
    let numberStr = String(Math.abs(number));
    
    return number * (5 ** numberStr.length);
  }