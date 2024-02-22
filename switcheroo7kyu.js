function switcheroo(x){
    let wordArr = x.split('');
    return wordArr.map(letter => {
      if (letter === 'a') {
        return 'b';
      } else if (letter === 'b') {
        return 'a';
      } else {
        return letter;
      }
    }).join('');
  }