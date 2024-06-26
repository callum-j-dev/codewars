var lengthOfSequence = function (arr, n) {
    console.log(arr);
    
    let numOccurences = arr.reduce((total, current) => {
      if (current === n) {
        total++;
      }
      return total;
    }, 0);
    
    
    if (numOccurences === 2) {
      const first = arr.indexOf(n);
      const last = arr.lastIndexOf(n);
      const sub = arr.slice(first, last + 1);
      
      return sub.length;
    } else {
      return 0;
    }
  };