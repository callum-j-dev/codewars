var greet = function(name) {
    let nameCharArr = name.toLowerCase().split('');
    nameCharArr[0] = nameCharArr[0].toUpperCase();
    
    return `Hello ${nameCharArr.join('')}!`;
  };