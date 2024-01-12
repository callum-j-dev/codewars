function solution(pairs){
    // TODO: complete
    let outArr = [];
    for (const key in pairs) {
      outArr.push(`${key} = ${pairs[key]}`);
    }
    
    return outArr.join(',');
  }