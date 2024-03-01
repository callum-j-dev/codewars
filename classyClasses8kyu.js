class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
    get info() {
      return `${this._name}s age is ${this._age}`;
    }
  }