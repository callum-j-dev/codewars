function alternateCase(s) {
    let arr = s.split('');
    
    let alternate = arr.map(letter => {
      if (letter === letter.toLowerCase()) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    });
    
    return alternate.join('');
  }