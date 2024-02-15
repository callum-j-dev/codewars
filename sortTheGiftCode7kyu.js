function sortGiftCode(code){
    //TODO 
    return code.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  }