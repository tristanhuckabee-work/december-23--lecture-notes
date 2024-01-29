class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;

    Book.count++;
  }
  static count = 0;

  changeAuthor(newAuthor) {
    this.author = newAuthor;
    return `${this.title} by ${this.author}...`;
  }
  
  static getCount() {
    console.log(`There are ${Book.count} books...`);
  }
}


class Stationary {
  constructor(type, material, bodyColor, label) {
    this.type = type;
    this.material = material;
    this.bodyColor = bodyColor;
    this.label = label;
  }

  write(msg) {
    console.log(msg);
  }
}

class Pen extends Stationary {
  constructor(inkColor = 'black', inkLevel = 100) {
    super('Pen', 'Plastic', 'White', 'bic');
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }

  write(msg) {
    if (this.inkLevel < msg.length) {
      console.log('Not Enough Ink!!!')
    }
    console.log(msg);
    this.inkLevel -= msg.length;
  }
  refill() {
    this.inkLevel = 100;
  }
}

module.exports = {
  Book,
  Stationary,
  Pen
}