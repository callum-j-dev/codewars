function spot(s1,s2){
  
    const length = s1.length;
    const diffs = [];
    
    for (let i = 0; i < length; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) {
        diffs.push(i);
      }
    }
    
    return diffs;
  }