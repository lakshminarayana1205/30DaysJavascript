// Activity 2: Object Methods
// + Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.


let book = {
    title: "Atomic Habits",
    author: "James Clear",
    getBookInfo: function () {
      return `${this.title} by ${this.author}`;
    },
  };


console.log(book.getBookInfo());






// © Task 4: Add a method to the book object that takes a parameter (year) and updates the book s year property, then log the updated object.


let books = {
    title: "Harry Potter and the Cursed Child",
    author: "J.K Rowling",
    year: 2016,
    getBookInfo: function () {
      return `${this.title} by ${this.author}`;
    },
    updatedYear: function (year) {
      this.year = year;
    },
  };
  
  console.log(books.getBookInfo());
  console.log(books.year);
  
  books.updatedYear(2021)
  console.log(`Updated Year ${books.year}`)


