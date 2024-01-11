// return masked string
function maskify(cc) {
    if (cc.length < 5) {
      return cc;
    }
    
    let ccArr = cc.split('');
    let maskedArr = ccArr.map((char, index, arr) => {
      if (index < arr.length - 4) {
        return '#';
      } else {
        return char;
      }
    });
    
    return maskedArr.join('');
  
  }
  