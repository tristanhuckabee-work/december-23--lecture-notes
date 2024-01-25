class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
    this.pages = 0

    Book.count += 1;
  }
  static count = 0;

  getInfo() {
    return `${this.title} by ${this.author}`;
  }
  addPage() {
    this.pages++;
    return this.pages;
  }

  static getBookCount() {
    return Book.count;
  }
  static changeAuthor(...books) {
    books.forEach(book => book.author = 'John');
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
  constructor(type, material, bodyColor, label, inkColor ='blk', inkLevel = 100) {
    super(type, material, bodyColor, label);
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }

  write(msg) {
    if (this.inkLevel < msg.length) {
      console.log('Not Enough Ink');
      this.inkLevel -= msg.length
      return;
    }
    console.log(msg);
  }

  refill() {
    this.inkLevel = 100;
  }
}

// class GelPen extends Pen {
//   constructor(...) {
//     super(...)
//     ...
//   }
// }

module.exports = {
  Book,
  Stationary,
  Pen
}