var splitInParts = function(s, partLength){
    // Good Luck!
    let sArr = s.split('');
    let outArr = [];
    while(sArr.length > 0) {
      outArr.push(popN(sArr, partLength));
    }
    
    return outArr.join(' ');
  }
  
  function popN(arr, length) {
    let outArr = [];
    if (arr.length < length) {
      while(arr.length > 0) {
        outArr.push(arr.shift());
      }
      return outArr.join('');
    }
    
    for (let i = 0; i < length; i++) {
      outArr.push(arr.shift());
    }
    
    return outArr.join('');
  }