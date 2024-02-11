var encryptThis = function(text) {
    // Implement me! :)
    let wordArr = text.split(' ');
    let encryptedWordArr = wordArr.map(word => encryptWord(word));
    
    return encryptedWordArr.join(' ');
    
    
  }
  
  function encryptWord(word) {
    let lng = word.length;
    let textArr = word.split('');
    textArr[0] = word.charCodeAt(0);
    if (lng > 1) {
      let second = textArr[1];
      let last = textArr[lng - 1];
      
      textArr[1] = last;
      textArr[lng  - 1] = second
    }
    
    return textArr.join('');
  }