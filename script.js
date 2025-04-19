//empty book library array
let myLibrary = [];

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

//Display form button
const addBook = document.querySelector(".add-book");
const bookForm = document.querySelector(".book-form");
addBook.addEventListener("click", (event) => {
  event.preventDefault();
  bookForm.style.display = "block";
  addBook.style.display = "none";
});

//add new book to library
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const submit = document.querySelector(".submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(title.value, author.value);
  displayBook(myLibrary);
  title.value = "";
  author.value = "";
});

//function that loops through the array and displays book
function displayBook(library) {
  table.innerHTML = ``;
  library.forEach((book) => {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const td = document.createElement("td");
    td.innerText = `Id: ${book.id}  Title: ${book.title}  Author: ${book.author}`;
    tr.appendChild(td);
  });
}
