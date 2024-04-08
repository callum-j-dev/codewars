function hello(name = 'World') {
    if (name === '') {
      name = 'World';
    }
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${capitalizedName}!`;
  }