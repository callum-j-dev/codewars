function bestFriend(txt, a, b) {
    let aSplit = txt.split(a);
    let bSplit = txt.split(a + b);
    
    return aSplit.length ===  bSplit.length;
  }