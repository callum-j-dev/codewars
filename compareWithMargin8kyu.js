function closeCompare(a, b, margin = 0){
    // ...
    let diff = a - b;
    if (Math.abs(diff) <= margin) {
      return 0;
    } else if(diff < 0) {
      return -1;
    } else {
      return 1;
    }
  }
  