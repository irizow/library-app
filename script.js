let myLibrary = [];
let newBook;
const addBookBtn = document.getElementById("addbookbtn");
const bookX = document.getElementById("bookX");
let popUpOn = false;
let isRead;

function Book(title, author, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
} 

let bookForm = document.getElementById("bookform");
let blurScreen = document.querySelector(".blur");

const getBookFromForm = () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById('yes').checked
    let rating = document.getElementById("rating").value;
    newBook = new Book(title, author, pages, read, rating)
    myLibrary.push(newBook);
    removePopUp();
    createBook();
}

function removePopUp() {
    bookForm.style.visibility = "hidden";
    blurScreen.style.visibility = "hidden";
    popUpOn = false;

}

function showPopUp() {
    bookForm.style.visibility = "visible";
    blurScreen.style.visibility = "visible";
    popUpOn = true;

}


function createBook() {
    const bookId = myLibrary.length - 1;
    const bookX = document.createElement("span")
    const bookCard = document.createElement("div");
    const titleCard = document.createElement("p");
    const authorCard = document.createElement("p");
    const pagesCard = document.createElement("p");
    const ratingCard = document.createElement("div");
    const readCard = document.createElement("button");

    bookCard.classList.add("bookcard");
    bookCard.id = "book" + bookId;


    document.getElementById("cardcontainer").appendChild(bookCard);
    bookCard.appendChild(bookX);
    bookCard.appendChild(titleCard);
    bookCard.appendChild(authorCard);
    bookCard.appendChild(pagesCard);
    bookCard.appendChild(ratingCard);
    bookCard.appendChild(readCard);

    bookX.innerHTML = "&#10006";
    bookX.style.alignSelf = "flex-end";
    titleCard.innerHTML = "<b>Title</b>: " + newBook.title;
    authorCard.innerHTML = "<b>Author</b>: " + newBook.author;
    pagesCard.innerHTML = "<b>nº of pages</b>: " + newBook.pages;

    if(newBook.read) {
        readCard.textContent = "Read";
        readCard.style.backgroundColor = "rgb(156, 255, 181)";
        isRead = true;
    }

    else if (!newBook.read) {
        readCard.textContent = "Not Read";
        isRead = false;
    }
    
    for (let i = 0; i<parseInt(newBook.rating); i++) {
        const ratingStars = document.createElement("p");
        ratingCard.appendChild(ratingStars);
        ratingStars.style.display = "inline-block"
        ratingStars.style.padding = "5px"
        ratingStars.innerHTML = "&#9733;"
    }

    bookX.addEventListener("click", ()=> {
        bookCard.remove();
        myLibrary.splice(bookId, 1);
    })
    
    readCard.addEventListener("click", ()=> {
        if (isRead) {
            readCard.textContent = "Not Read";
            readCard.style.backgroundColor = "white";
            isRead = false;
            myLibrary[bookId].read = false;
        }

        else if(!isRead) {
            readCard.textContent = "Read";
            readCard.style.backgroundColor = "rgb(156, 255, 181)";
            isRead = true;
            myLibrary[bookId].read = true;
        }
    })
}





addBookBtn.addEventListener("click", showPopUp)

bookX.addEventListener("click", removePopUp)


  