function sort(initialArray, sortingArray) {
    let tuples = [];
    initialArray.forEach((elem, index) => {
      tuples.push({
        value: elem,
        index: sortingArray[index]
      });
    })
    
    let sorted = [];
    
    for (let i = 0; i < tuples.length; i++) {
      let valTuple = tuples.find(tuple => tuple.index === i);
      sorted.push(valTuple.value);
    }
    
    return sorted;
  }