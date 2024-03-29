function sortMyString(S) {
    let arrStr = S.split('');
    let evens = arrStr.filter((letter, index) => index %2 === 0);
    let odds = arrStr.filter((letter, index) => index %2 !== 0);
    
    return `${evens.join('')} ${odds.join('')}`;
  }