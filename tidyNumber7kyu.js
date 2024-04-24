function tidyNumber(n){
    //your code here
    const arr = String(n).split('');
    const numArr = arr.map(num => Number(num));
    
    let tidy = true;
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] < numArr[i - 1]) {
        tidy = false;
      }
    }
    
    return tidy;
  }