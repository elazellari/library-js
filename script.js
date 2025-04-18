const myLibrary = [
  { id: 1, title: "New Book", author: "Hajvani" },
  { id: 2, title: "Kite Runner", author: "Khaled" },
  { id: 3, title: "3 Friends", author: "Remark" },
];

//Book Constructor
function Book(title, author) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
}

//Function to create a book and store it into the array

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  myLibrary.push(book);
}

//Function to create table

const table = document.querySelector("table");

//function that loops through the array and displays book

function displayBook(library) {
  library.forEach((book) => {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const td = document.createElement("td");
    td.innerText = `Id: ${book.id}  Title: ${book.title}  Author: ${book.author}`;
    tr.appendChild(td);
  });
}

//Display form button
const addBook = document.querySelector(".add-book");
const bookForm = document.querySelector(".book-form");

addBook.addEventListener("click", () => {
  bookForm.style.display = "block";
  addBook.style.display = "none";
});
