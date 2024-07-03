function squeakyClean(arr) {
    let cleaned = arr.filter(elem => {
      if (!!elem) {
        return elem;
      }
    });
    
    return cleaned;
  }