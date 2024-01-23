function expandedForm(num) {
    // Your code here
    let digitArr = String(num).split('');
    let outArr = [];
    let lng = digitArr.length;
    let zero = '0';
    
    digitArr.forEach((digit, index) => {
      if (digit !== '0') {
        outArr.push(digit + zero.repeat(lng - index - 1));
      }
    });
    
    return outArr.join(' + ');
    
  }