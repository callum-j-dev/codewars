function isPowerOfTwo(n){
    //.. should return true or false ..
    let num = n;
    while (n > 1) {
      n /= 2;
    }
    
    return n === 1;
  }