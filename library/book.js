const container = document.querySelector('#container');

function render(doc) {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const read = document.createElement('button');
  div.className = 'books';
  button.className = 'removeButton';
  button.textContent = 'Remove';
  read.className = 'readToggle';
  if (doc.data().read === 'Not read') {
    read.textContent = 'Read?';
  } else {
    read.textContent = 'Read';
  }
  let attr = 'A' + doc.id
  div.setAttribute('data-id', attr);
  div.innerHTML = `<h1>${doc.data().title}<h1> 
          <h2>${doc.data().author}<h2>
          <h3>${doc.data().pages} pages<h3>`;
  container.appendChild(div);
  div.appendChild(button);
  div.appendChild(read);
};

// if using localStorage
/* Object.keys(localStorage).forEach(key => {
  const item = localStorage.getItem(key);
  const itemParsed = JSON.parse(item);
  myLibrary.push(itemParsed);
  render();
}); */

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// below is using localStorage
/* function addBookToLibrary(title, author, pages, read) {
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
} */

function addBookToLibrary(title, author, pages, read) {
  // creates object from inputted data and appends it to library array
  db.collection('books').add({
    title,
    author,
    pages,
    read
  });
}

// need to update this to correctly update on firestore
function toggleRead(id, e) {
  db.collection('books').doc(id).update({
    read: 'Read'
  });
};


function removeBook(index) {
  let tempid = index.parentNode.dataset.id;
  let id = tempid.slice(1);
  db.collection('books')
    .doc(id)
    .delete();
  const div = Array.from(document.getElementsByClassName('books'));
  div.forEach(item => {
    const itemObj = item;
    if (item.dataset.index > index) {
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
    toggleRead(event.target.parentNode.dataset.id, event.target);
  }
});

// real time listener
db.collection('books').onSnapshot(snapshot => {
  const changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type === 'added') {
      render(change.doc);
    } else if (change.type === 'removed') {
      const li = container.querySelector(`[data-id=A${change.doc.id}]`);
      container.removeChild(li);
    }
  });
});
