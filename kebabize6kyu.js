function kebabize(str) {
    // TODO
    let arr = str.split('');
    let noNums = arr.filter(character => isNaN(parseInt(character)));
    let kebabArr = [];
    noNums.forEach((letter, index) => {
      if (isUpperCase(letter) && index > 0) {
        kebabArr.push('-');
        kebabArr.push(letter.toLowerCase());
      } else {
        kebabArr.push(letter.toLowerCase());
      }
    });
    
    return kebabArr.join('');
  }
  
  function isUpperCase(letter) {
    return letter === letter.toUpperCase();
  }