const container = document.querySelector('#container');
const myLibrary = [];

function render() {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const read = document.createElement('button');
  myLibrary.forEach(item => {
    div.className = 'books';
    button.className = 'removeButton';
    button.textContent = 'Remove';
    read.className = 'readToggle';
    if (item.read === 'Not read') {
      read.textContent = 'Read?';
    } else {
      read.textContent = 'Read';
    }
    div.dataset.index = myLibrary.length - 1;
    div.innerHTML = `<h1>${item.title}<h1> 
            <h2>${item.author}<h2>
            <h3>${item.pages} pages<h3>`;
    container.appendChild(div);
    div.appendChild(button);
    div.appendChild(read);
  });
}

Object.keys(localStorage).forEach(key => {
  const item = localStorage.getItem(key);
  const itemParsed = JSON.parse(item);
  myLibrary.push(itemParsed);
  render();
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  // creates object from inputted data and appends it to library array
  const bookObj = new Book(title, author, pages, read);
  localStorage.setItem(JSON.stringify(bookObj.title), JSON.stringify(bookObj));
  const book = localStorage.getItem(
    JSON.stringify(bookObj.title),
    JSON.stringify(bookObj)
  );
  const localBook = JSON.parse(book);
  myLibrary.push(localBook);
  render();
}

function toggleRead(index, e) {
  if (myLibrary[index].read === 'Not read') {
    myLibrary[index].read = 'Read';
    e.innerHTML = 'Read';
  } else {
    myLibrary[index].read = 'Not read';
    e.innerHTML = 'Read?';
  }
}

function removeBook(index) {
  const bookTitle = index.parentNode.firstChild.textContent;
  localStorage.removeItem(`"${bookTitle}"`);
  myLibrary.splice(index.parentNode.dataset.index, 1);
  const div = Array.from(document.getElementsByClassName('books'));
  div.forEach(item => {
    if (item.dataset.index === index.parentNode.dataset.index) {
      container.removeChild(item);
    }
  });
  div.forEach(item => {
    const itemObj = item;
    if (item.dataset.index > index.parentNode.dataset.index) {
      itemObj.dataset.index -= 1;
    }
  });
}

function newBook() {
  document.getElementById('form').style.display = 'block';
  document.getElementById('addBook').style.display = 'none';
}

function clearFields() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
}

function addBook() {
  const form = document.getElementById('form');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const page = document.getElementById('pages').value;
  let read = '';
  if (form.checkValidity()) {
    if (document.getElementById('read').checked === true) {
      read = 'Read';
    } else {
      read = 'Not read';
    }
    addBookToLibrary(title, author, page, read);
    document.getElementById('form').style.display = 'none';
    document.getElementById('addBook').style.display = 'block';
    clearFields();
  } else if (!title.checkValidity()) {
    document.getElementById('title').placeholder = 'Please enter a title';
  } else if (!author.checkValidity()) {
    document.getElementById('author').placeholder =
      'Please enter an author name';
  } else {
    document.getElementById('pages').placeholder =
      'Please enter number of pages';
    document.getElementById('pages').value = '';
  }
}

clearFields();

const parent = document.getElementById('container');
parent.addEventListener('click', event => {
  if (event.target.className === 'removeButton') {
    removeBook(event.target);
  } else if (event.target.className === 'readToggle') {
    toggleRead(event.target.parentNode.dataset.index, event.target);
  }
});
