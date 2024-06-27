function isSatorSquare(tabletOriginal) {
  
    const tablet = [...tabletOriginal];
    for(let i = 0; i < tablet.length; i++) {
      let row = tablet[i];
      let column = getColumn(tablet, i);
      let invRow = tablet[tablet.length - (i + 1)].slice();
      let invColumn = getInvColumn(tablet, i);
      //console.log(`Row: [${row}]; Column: [${column}]; InvRow: [${invRow}]; InvColumn: [${invColumn}]`);
      let rowColMatch = JSON.stringify(column) === JSON.stringify(row);
      let rowInvRowMatch = JSON.stringify(row) === JSON.stringify(invRow.reverse());
      let columnInvColumnMatch = JSON.stringify(column) === JSON.stringify(invColumn);
      
      //console.log(`rowColMatch: ${rowColMatch}; rowInvRowMatch: ${rowInvRowMatch}; colInvColMatch: ${columnInvColumnMatch};`);
      
      if (!rowColMatch || !rowInvRowMatch || !columnInvColumnMatch) {
        return false;
      }
    }
    
    return true;
  
  }
  
  function getColumn(words, ind) {
    let wordArr = [];
    words.forEach(word => wordArr.push(word[ind]));
    
    return wordArr;
  }
  
  function getInvColumn(words, ind) {
    let wordArr = [];
    words.forEach(word => wordArr.unshift(word[word.length - (ind + 1)]));
    
    return wordArr;
  }