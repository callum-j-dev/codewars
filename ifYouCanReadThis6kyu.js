function toNato(words) {
    // you can access the preloaded NATO dictionary
    // NATO['A'] === 'Alfa', etc.
  let noSpace = words.split(' ').join('');
  console.log(noSpace);
  let letters = noSpace.split('');
  console.log(letters);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  let natofied = letters.map(letter => {
    if (alphabet.includes(letter.toLowerCase())) {
      return NATO[letter.toUpperCase()];
    } else {
      return letter;
    }
  });
  
  return natofied.join(' ');
}