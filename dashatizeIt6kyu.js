function dashatize(num) {
    num = Math.abs(num);
    
    let stringArr = String(num).split('');
    let numArr = stringArr.map(num => Number(num));
    let outArr = [];
    
    outArr.push(numArr[0]);
    if (numArr[0] %2 !== 0) {
      outArr.push('-');
    }
    
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] %2 !== 0) {
        if (numArr[i - 1] %2 === 0) {
          outArr.push('-');
        }
        outArr.push(numArr[i]);
        outArr.push('-');
      } else {
        outArr.push(numArr[i]);
      }
    }
    
    if (outArr[outArr.length - 1] === '-') {
      outArr.pop();
    } 
    
    return outArr.join('');
    
  }