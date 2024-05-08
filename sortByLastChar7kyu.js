function last(x){
    let arr = x.split(' ');
    return arr.sort((a, b) => {
      if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
        return -1;
      }
      
      if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
        return 1;
      }
      
      return 0;
    });
  }