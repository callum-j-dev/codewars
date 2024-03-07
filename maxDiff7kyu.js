function maxDiff(list) {
    if (list === [] || list.length <  1) {
      return 0;
    }
    
    let min = Math.min(...list);
    let max = Math.max(...list);
    
    return max - min;
  };