// open and close Nav and Cart

function openNav(){
    document.getElementsByClassName('overlay')[0].style.width="50%";
    document.getElementsByClassName('burger')[0].style.display="none";
}

function closeNav(){
    document.getElementsByClassName('overlay')[0].style.width="0%";
    document.getElementsByClassName('burger')[0].style.display="initial";
   
    
}
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

//Variables
let totalPrice = 0;
let total;
 
//! Selectors
const quantityInput = document.querySelector('.quantity');
const quantityInput1 = document.querySelector('.quantity1');
const quantityInput2 = document.querySelector('.quantity2');
const quantityInput3 = document.querySelector('.quantity3');
const title = document.querySelector('.title');
const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2');
const title3 = document.querySelector('.title3');
const price = document.querySelector('.price');
const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
const todoButton = document.querySelector('.cart-btn');
const todoButton1 = document.querySelector('.cart-btn1');
const todoButton2 = document.querySelector('.cart-btn2');
const todoButton3 = document.querySelector('.cart-btn3');
const cartList = document.querySelector('.cart-list');


//!Event Listeners
document.addEventListener('DOMContentLoaded', showSavedCart());

todoButton.addEventListener('click' , addBook);
todoButton1.addEventListener('click' , addBook1);
todoButton2.addEventListener('click' , addBook2);
todoButton3.addEventListener('click' , addBook3);
cartList.addEventListener('click', deleteItem);



function addBook(event){
    event.preventDefault(); 
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput.value === "" ){
         quantityInput.value = 1;
         
    }else if(quantityInput.value === "0"){
        alert("Please enter a valid amount.");

    }else{
    total = quantityInput.value*price.innerHTML;
    let storeBook = quantityInput.value +" (x) " + title.innerHTML +" "+ total;
    newBook.innerHTML = storeBook;
    totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
   
    saveLocalBooks(storeBook);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
    document.getElementById("buy").style.display = "block";
    
    alert("New Item in cart");
    
    }

    
}

function addBook1(event){
     
    event.preventDefault(); 
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput1.value === "" ){
         quantityInput1.value = 1;
         
    }else if(quantityInput1.value === "0"){
        alert("Please enter a valid amount.");

    }else{
     total = quantityInput1.value*price1.innerHTML;
     let storeBook = quantityInput1.value +" (x) " + title1.innerHTML +" "+ total;
    newBook.innerHTML = storeBook;
    totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
    
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
    saveLocalBooks(storeBook);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn1');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("buy").style.display = "block";
    
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
    alert("New Item in cart");
    
    }
}

function addBook2(event){
    
    event.preventDefault(); 
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput2.value === "" ){
         quantityInput2.value = 1;
         
    }else if(quantityInput2.value === "0"){
        alert("Please enter a valid amount.");

    }else{
    total = quantityInput2.value*price2.innerHTML;
    let storeBook = quantityInput2.value +" (x) " + title2.innerHTML +" "+ total;
    newBook.innerHTML = storeBook;
    totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
    saveLocalBooks(storeBook);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn2');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("buy").style.display = "block";
    
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
    
    alert("New Item in cart");
    
    }

}

function addBook3(event){
     
    event.preventDefault(); 
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput3.value === "" ){
         quantityInput3.value = 1;
    }else if(quantityInput3.value === "0"){
        alert("Please enter a valid amount.");

    }else{
    total = quantityInput3.value*price3.innerHTML;
    let storeBook = quantityInput3.value +" (x) " + title3.innerHTML +" "+ total;
    newBook.innerHTML = storeBook;
    totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
   
    saveLocalBooks(storeBook);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn3');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("buy").style.display = "block";
    
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
    alert("New Item in cart");
    
    }
}

function deleteItem(event){
    
    const item = event.target;

    //?delete
   
    const bookToBuy = item.parentElement.parentElement;
    removeLocalBooks(bookToBuy);
         bookToBuy.remove();

    const cartList = document.getElementsByClassName("cart-list")[0].innerHTML;
    if(cartList === ""){
        document.getElementById("empty-txt").style.display = "inline" ;

    }
   

}

function saveLocalBooks(book){
    
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem("books"));
    }
  
    // ---------------------------------------------

    books.push(book);

    localStorage.setItem("books" , JSON.stringify(books));

}



function removeLocalBooks(book){
    
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem("books"));
    }

  
    
   const bookIndex = book.children[0].innerText;
   books.splice(books.indexOf(bookIndex),1);
   localStorage.setItem("books", JSON.stringify(books));

}

function showSavedCart(){
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem("books"));
    }
    
    books.forEach(function(book){
        console.log(book);
      if(String(book).includes("Stone")){
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const newBook = document.createElement('li');
        if(quantityInput.value === "" ){
             quantityInput.value = 1;
             
        }else if(quantityInput.value === "0"){
            alert("Please enter a valid amount.");
    
        }else{
        total = quantityInput.value*price.innerHTML;
        let storeBook = quantityInput.value +" (x) " + title.innerHTML +" "+ total;
        newBook.innerHTML = storeBook;
        totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
        newBook.classList.add('book-item');
       
    
        
        bookDiv.appendChild(newBook);
       
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        bookDiv.appendChild(trashButton);

        cartList.appendChild(bookDiv);
        document.getElementById("empty-txt").style.display = "none";
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
        document.getElementById("buy").style.display = "block";
    
    
        }
    }else if(String(book).includes("Secters")){
    
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const newBook = document.createElement('li');
         if(quantityInput1.value === "" ){
             quantityInput1.value = 1;
             
        }else if(quantityInput1.value === "0"){
            alert("Please enter a valid amount.");
    
        }else{
        total = quantityInput1.value*price1.innerHTML;
        let storeBook = quantityInput1.value +" (x) " + title.innerHTML +" "+ total;
        newBook.innerHTML = storeBook;
        totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
        newBook.classList.add('book-item');
       
    
        
        bookDiv.appendChild(newBook);
       
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn1');
        bookDiv.appendChild(trashButton);

        cartList.appendChild(bookDiv);
        document.getElementById("empty-txt").style.display = "none";
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
        document.getElementById("buy").style.display = "block";
    
    
        }
    
    
    }else if(String(book).includes("Azkaban")){
    
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const newBook = document.createElement('li');
         if(quantityInput2.value === "" ){
             quantityInput2.value = 1;
             
        }else if(quantityInput2.value === "0"){
            alert("Please enter a valid amount.");
    
        }else{
        total = quantityInput2.value*price2.innerHTML;
        let storeBook = quantityInput2.value +" (x) " + title.innerHTML +" "+ total;
        newBook.innerHTML = storeBook;
        totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
        newBook.classList.add('book-item');
       
    
        
        bookDiv.appendChild(newBook);
       
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn2');
        bookDiv.appendChild(trashButton);

        cartList.appendChild(bookDiv);
        document.getElementById("empty-txt").style.display = "none";
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
        document.getElementById("buy").style.display = "block";
    
    
        }
    
    }else if(String(book).includes("Fire")){
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const newBook = document.createElement('li');
         if(quantityInput3.value === "" ){
             quantityInput3.value = 1;
             
        }else if(quantityInput3.value === "0"){
            alert("Please enter a valid amount.");
    
        }else{
        total = quantityInput3.value*price3.innerHTML;
        let storeBook = quantityInput3.value +" (x) " + title.innerHTML +" "+ total;
        newBook.innerHTML = storeBook;
        totalPrice = parseFloat(totalPrice) + parseFloat(total) ;
        newBook.classList.add('book-item');
       
    
        
        bookDiv.appendChild(newBook);
       
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn3');
        bookDiv.appendChild(trashButton);

        cartList.appendChild(bookDiv);
        document.getElementById("empty-txt").style.display = "none";
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2);
        document.getElementById("buy").style.display = "block";
    
    
        }
    
     }
    
    });
}
