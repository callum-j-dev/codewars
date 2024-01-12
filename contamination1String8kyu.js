function contamination(text, char){
    // Code here ;
    if (!text || !char) {
      return '';
    }
    
    let outStr = '';
    for (let i = 0; i < text.length; i++) {
      outStr += char;
    }
    
    return outStr;
  }