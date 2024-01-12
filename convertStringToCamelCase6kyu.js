function toCamelCase(str){
    // replace -s with spaces
    str = str.split('-').join(' ');
    // replace _s with spaces
    str = str.split('_').join(' ');
    
    let strArr = str.split(' ');
    let strArrOut = strArr.map((str, index) => {
      if (index > 0) {
        return capitalize(str);
      } else {
        return str;
      }
    });
    
    return strArrOut.join('');
  
  }
  function capitalize(str) {
    let strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  }