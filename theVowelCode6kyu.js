function encode(string) {
    let stringArr = string.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let encoded = stringArr.map(letter => {
      if (vowels.includes(letter.toLowerCase())) {
        return vowels.indexOf(letter.toLowerCase()) + 1;
      } else {
        return letter;
      }
    });
    
    return encoded.join('');
  }
  
  function decode(string) {
    let stringArr = string.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let decoded = stringArr.map(letter => {
      if (!Number.isNaN(parseInt(letter))) {
        return vowels[Number(letter) - 1];
      } else {
        return letter;
      }
    })
    return decoded.join('');
  }