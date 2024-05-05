reverse = function(array) {
    // TODO: program me!
    let out = [];
    array.forEach(elem => out.unshift(elem));
    
    return out;
  }