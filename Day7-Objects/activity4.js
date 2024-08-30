// Activity 4: The this Keyword
// + Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling thiz method.


const myBook = {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    bookDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }
}

console.log(myBook.bookDetails())