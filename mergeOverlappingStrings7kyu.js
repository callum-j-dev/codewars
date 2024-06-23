function mergeStrings(first, second){
    let i = 0;
    const len1 = first.length;
    const len2 = second.length;
    let out = first + second;
    
    while (i <= len1 && i <= len2 ) {
      if (first.slice(len1 - i) === second.slice(0, i)) {
        out = first + second.slice(i);
      }
      i++;
    }
    
    return out;
  }
  