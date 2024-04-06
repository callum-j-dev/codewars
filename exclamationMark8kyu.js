function remove (string) {
    let noX = string.split('!');
    noX.push('!');
    return noX.join('');
  }