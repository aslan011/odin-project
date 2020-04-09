const container = document.querySelector('#container');
let myLibrary = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read){
        //creates object from inputted data and appends it to library array
        title = new Book(title, author, pages, read)
        myLibrary.push(title);
        render()
        
}

function checkDup(){
    myLibrary.forEach(function(item){
        
    }
)}

function render() {
    const div = document.createElement("div")
    myLibrary.forEach(function(item){
    div.className = "books";
    div.innerHTML = 
            `<h1>${item.title}<h1> 
            <h2>${item.author}<h2>
            <h3>${item.pages}<h3>
            <h4>${item.read}<h4>`
    container.appendChild(div)}
    
)}

function newBook() {
    document.getElementById("form").style.display = "block";
    document.getElementById("newBook").style.display = "none";
}

function addBook() {
    titl = document.getElementById("title").value
    autho = document.getElementById("author").value
    page = document.getElementById("pages").value
    rea = document.getElementById("read").value
    addBookToLibrary(titl, autho, page, rea)
    document.getElementById("form").style.display = "none";
    document.getElementById("newBook").style.display = "block";
    
}

addBookToLibrary("Lord of the Rings", "this guy", "348", "read")