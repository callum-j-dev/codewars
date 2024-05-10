function remove(s,n){
    //coding and coding....
    const sArr = s.split('');
    let remaining = n;
    while (remaining > 0) {
      if (sArr.includes('!')) {
        sArr.splice(sArr.indexOf('!'), 1);
        remaining --;
      } else {
        remaining--;
      }
    }
    
    return sArr.join('');
  }