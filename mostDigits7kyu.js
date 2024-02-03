function findLongest(array){
    // code here
    let strArr = array.map(num => String(num));
    let max = 0;
    let maxNum;
    
    strArr.forEach((str) => {
      if (str.length > max) {
        max = str.length;
        maxNum = str;
      }
    });
    
    return Number(maxNum);
  }