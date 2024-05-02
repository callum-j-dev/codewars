function replace(s){
    //coding and coding....
    const sArr = s.split('');
    const exclaimed = sArr.map(letter => {
      if (isVowel(letter)) {
        return '!';
      } else {
        return letter;
      }
    });
    
    return exclaimed.join('');
    
    
  }
  
  function isVowel(letter) {
    const vowels = "aeiou";
    return vowels.includes(letter.toLowerCase());
  }