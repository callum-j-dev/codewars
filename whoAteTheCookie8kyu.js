function cookie(x){
    // ...
    let culprit = 'the dog';
    if (typeof x === 'string') {
      culprit = 'Zach';
    } else if (typeof x === 'number') {
      culprit = 'Monica';
    }
    
    return `Who ate the last cookie? It was ${culprit}!`;
  }