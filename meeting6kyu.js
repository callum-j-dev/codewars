function meeting(s) {
    // your code
  let guestNames = s.split(';');
  
  let guests = [];
  guestNames.forEach(guest => {
    let names = guest.split(':');
    guests.push(new Person(names[0].toUpperCase(), names[1].toUpperCase()));
  })
  
  let guestsSorted = guests.sort((a, b) => {
    if (a.last === b.last) {
      return a.first.localeCompare(b.first);
    } else {
      return a.last.localeCompare(b.last);
    }
  });
  
  let outString = '';
  guestsSorted.forEach(guest => outString += guest);
  
  return outString;
}

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  
  toString() {
    return `(${this.last}, ${this.first})`;
  }
}