function divCon(x){
    let strings = [];
    let nonStrings = [];
    
    x.forEach(num => {
      if (typeof num === 'string') {
        strings.push(num);
      } else {
        nonStrings.push(num);
      }
    });
    
    return nonStrings.reduce((total, current) => total + current, 0) - strings.reduce((total, current) => total + Number(current), 0);
  
  }