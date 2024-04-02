function all( arr, fun ){
    // ...
    let funFlag = true;
    arr.forEach(value => {
      if (!fun(value)) {
        funFlag = false;
      }
    });
    
    return funFlag;
  }