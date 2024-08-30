// Activity 3: Nested Objects.
// + Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    'name': 'Science Library',
    books : [
        {
            title: 'Dune',
            author: 'Frank Herbert',
            year : 1965
        },
        {
            title: 'The Time Machine',
            author: 'H.G. Wells',
            year : 1895
        },
        {
            title: 'Brave New World',
            author: 'Aldous Huxley',
            year : 1932
        },
        {
            title: 'The Forever War',
            author: 'Joe Haldeman',
            year : 1974
        },
        {
            title: 'Snow Crash',
            author: 'Neal Stephenson',
            year : 1992
        },
    ]
}
console.log(library)












// + Task 6: Acces: and log the name of the library and the titles of all the books in the library.



console.log(`Name: ${library.name}`)
library.books.forEach(allbooks => {
    console.log(`Title: ${allbooks.title}, Author: ${allbooks.author}, Year: ${allbooks.year}`)
});