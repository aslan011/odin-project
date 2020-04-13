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

function toggleRead(index, e){
    if (myLibrary[index]["read"] == "Not read"){
        myLibrary[index]["read"] = "Read"
        e.innerHTML = "Read"
    }
    else {
        myLibrary[index]["read"] = "Not read"
        e.innerHTML = "Read?"
    }
}

function render() {
    const div = document.createElement("div")
    const button = document.createElement("button")
    const read = document.createElement("button")
    myLibrary.forEach(function(item){
    div.className = "books";
    button.className = "removeButton"
    button.textContent = "Remove"
    read.className = "readToggle"
    if (item.read == "Not read"){
    read.textContent = "Read?"
    }
    else {read.textContent = "Read"}
    div.dataset.index = (myLibrary.length -1);
    div.innerHTML = 
            `<h1>${item.title}<h1> 
            <h2>${item.author}<h2>
            <h3>${item.pages} pages<h3>`
    container.appendChild(div)
    div.appendChild(button)
    div.appendChild(read)}
    
)}

function removeBook (index){
    myLibrary.splice(index,1);
    const div = Array.from(document.getElementsByClassName("books"))
    div.map(function(item){
        if (item.dataset.index === index) {
            container.removeChild(item)
        }})
    div.forEach(function(item){
        if (item.dataset.index > index) {
            item.dataset.index -= 1
        }})
}

function newBook() {
    document.getElementById("form").style.display = "block";
    document.getElementById("addBook").style.display = "none";
}

function addBook() {
    title = document.getElementById("title").value
    author = document.getElementById("author").value
    page = document.getElementById("pages").value
    if (document.getElementById("read").checked == true){
        read = "Read"}
    else {read = "Not read"}
    addBookToLibrary(title, author, page, read)
    document.getElementById("form").style.display = "none";
    document.getElementById("addBook").style.display = "block"; 
    clearFields()   
}

function clearFields(){
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("pages").value = ""
}

addBookToLibrary("Open veins of South America", "Some guy", "456 pages")
addBookToLibrary("Open veins of South America", "Some guy", "456 pages")
addBookToLibrary("Open veins of South America", "Some guy", "456 pages")
addBookToLibrary("PRisoners of Georgrpahy", "Some guy", "456 pages")
addBookToLibrary("Open veins of South America", "Some guy", "456 pages")
addBookToLibrary("Open veins of South America", "Some guy", "456 pages")
addBookToLibrary("Open veins of South America", "Some guy", "456 pages")
addBookToLibrary("Oh dearrrrrr", "Some guy", "456 pages")
addBookToLibrary("58573739", "Some guy", "456 pages")
addBookToLibrary("48 laws of power", "Some guy", "456 pages")
addBookToLibrary("The subtle art of not", "Some guy", "456 pages")
addBookToLibrary("How to run away from People", "Some guy", "456 pages")
render()

const parent = document.getElementById("container")
    parent.addEventListener("click", event => {
        if (event.target.className === "removeButton") {
            removeBook(event.target.parentNode.dataset.index)
        }

        else if (event.target.className === "readToggle") {
            toggleRead(event.target.parentNode.dataset.index, event.target)
        }
})
