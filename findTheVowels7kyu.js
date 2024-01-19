function vowelIndices(word){
    //your code here
    let vowels = 'aeiouy';
    let indices = [];
    
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word.charAt(i).toLowerCase())) {
        indices.push(i + 1);
      }
    }
    
    return indices;
  }