function convertHashToArray(hash){
    let out = [];
    for (const [key, value] of Object.entries(hash)) {
      out.push([key, value]);
    }
    
    return out;
  }