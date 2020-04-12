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
    if(myLibrary[index]["read"] == "Read?"){
        myLibrary[index]["read"] = "Read"
        e.innerHTML = "Read"
    }
    else {
        myLibrary[index]["read"] = "Read?"
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
    read.textContent = "Read?"
    div.dataset.index = (myLibrary.length -1);
    div.innerHTML = 
            `<h1>${item.title}<h1> 
            <h2>${item.author}<h2>
            <h3>${item.pages}<h3>
            <h4>${item.read}<h4>`
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
    document.getElementById("newBook").style.display = "none";
}

function addBook() {
    title = document.getElementById("title").value
    author = document.getElementById("author").value
    page = document.getElementById("pages").value
    if (document.getElementById("read").checked == true){
        read = "read"}
    else {read = "Not read"}
    addBookToLibrary(title, author, page, read)
    document.getElementById("form").style.display = "none";
    document.getElementById("newBook").style.display = "block";
    
}

const parent = document.getElementById("container")
    parent.addEventListener("click", event => {
        if (event.target.className === "removeButton") {
            removeBook(event.target.parentNode.dataset.index)
        }

        else if (event.target.className === "readToggle") {
            toggleRead(event.target.parentNode.dataset.index, event.target)
        }
})
