function seaSick(x){
    if (x.length === 1) {
      return 'No Problem';
    }
    
    let changeTotal = 0;
    
    for (let i = 1; i < x.length; i++) {
      let prev = x.charAt(i - 1);
      let current = x.charAt(i);
      if (checkChange(prev, current)) {
        changeTotal++;
      }
    }
    
    return changeTotal / x.length > 0.2 ? 'Throw Up' : 'No Problem';
  
  }
  
  function checkChange(a, b) {
    return a !== b;
  }