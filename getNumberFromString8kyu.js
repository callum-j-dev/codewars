function getNumberFromString(s) {
    let sArr = s.split('');
    let digits = sArr.filter(char => !isNaN(parseInt(char)));
    
    return Number(digits.join(''));
  }