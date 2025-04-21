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
const read = document.querySelector("read");
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
    addBookToTable(book);
  });
}

//add book to display function

function addBookToTable(myBook) {
  const tr = document.createElement("tr");
  table.appendChild(tr);
  const td = document.createElement("td");
  const input = document.createElement("input");
  const label = document.createElement("label");
  label.innerText = "Read: ";
  input.type = "checkbox";
  //button to delete book
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete book";
  td.innerText = `Id: ${myBook.id}  Title: ${myBook.title}  Author: ${myBook.author}`;
  tr.appendChild(td);
  tr.appendChild(label);
  tr.appendChild(input);
  tr.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    let index = myLibrary.indexOf(myBook);
    if (index > -1) {
      myLibrary.splice(index, 1);
      tr.innerText = "";
    }
  });
}
