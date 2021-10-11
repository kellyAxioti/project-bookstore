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
let totalPrice = 0 ;
let total;
let priceToRemove;
let newTotalPrice=0;



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
const cartList2 = document.querySelector('.cart-list2');



//!Event Listeners

document.addEventListener('DOMContentLoaded', getBooks);
todoButton.addEventListener('click' , addBook);
todoButton1.addEventListener('click' , addBook1);
todoButton2.addEventListener('click' , addBook2);
todoButton3.addEventListener('click' , addBook3);
cartList.addEventListener('click', deleteItem);
cartList2.addEventListener('click', deleteItem2);



function addBook(event){
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput.value === "" ){
         quantityInput.value = 1;
         
    }else if(quantityInput.value === "0"){
        alert("Please enter a valid amount.");

    }else{
     total = quantityInput.value*price.innerHTML;
     let storeBook = quantityInput.value +" (x) " + title.innerHTML;
    newBook.innerHTML = storeBook;
    let  total_price;
    if(localStorage.getItem("total_price")===null){
        total_price = []; 
        totalPrice = parseFloat(totalPrice) + parseFloat(total)  ;
    }else{
        total_price = JSON.parse(localStorage.getItem("total_price"));
        totalPrice =  parseFloat(total) + parseFloat(total_price[0])  ;
        
    }
    total_price[0]=parseFloat(totalPrice);
    
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
    
    const priceToRemove = document.createElement('p');
    priceToRemove.innerHTML = total.toFixed(2);
    
    priceToRemove.classList.add('price-to-rmv');
    
    
    bookDiv.appendChild(priceToRemove );

    bookDiv.getElementsByTagName("p")[0].style.display="none";
    

    bookDiv.innerHTML = bookDiv.innerHTML + priceToRemove.innerHTML;

    bookDiv.innerHTML = bookDiv.innerHTML + " " + '<p style="display:inline"> &euro;</p>' + " ";
    

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i style="display:inline" class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    bookDiv.getElementsByTagName("li")[0].style.cssFloat="left";
    bookDiv.getElementsByTagName("li")[0].style.textAlign="left";
    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("buy").style.display = "block";
    
    
    
    alert("New Item in cart");
    
    
    if(totalPrice >= 100){
        
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        let  totals;
        if(localStorage.getItem("totals") === null  ){
            totals = [];
           
    
        }else{
            totals = JSON.parse(localStorage.getItem("totals"));
            
       
        }
        totals[0] = parseFloat(total_price[0]) - (10/100) * total_price[0] ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
    }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
   
    }
    saveLocalBook(quantityInput.value +" (x) " + title.innerHTML +" " +priceToRemove.innerHTML , priceToRemove.innerHTML );
    saveLocalPrice(document.getElementById("total-price").innerHTML);
    }
}

function addBook1(event){
     
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput1.value === "" ){
         quantityInput1.value = 1;
         
    }else if(quantityInput1.value === "0"){
        alert("Please enter a valid amount.");

    }else{
     total = quantityInput1.value*price1.innerHTML;
     let storeBook = quantityInput1.value +" (x) " + title1.innerHTML;
    newBook.innerHTML = storeBook;
    if(localStorage.getItem("total_price")===null){
        total_price = []; 
        totalPrice = parseFloat(totalPrice) + parseFloat(total)  ;
    }else{
        total_price = JSON.parse(localStorage.getItem("total_price"));
        totalPrice =  parseFloat(total) + parseFloat(total_price[0])  ;
        
    }
   total_price[0]=parseFloat(totalPrice);
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
    
  
    const priceToRemove1 = document.createElement('p');
    priceToRemove1.innerHTML = total.toFixed(2);
    
    priceToRemove1.classList.add('price-to-rmv1');
     bookDiv.appendChild(priceToRemove1);
     bookDiv.getElementsByTagName("p")[0].style.display="none";
    bookDiv.innerHTML =bookDiv.innerHTML + priceToRemove1.innerHTML;
    bookDiv.innerHTML = bookDiv.innerHTML + " " + '<p style="display:inline"> &euro;</p>' + " ";
    
    

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i style="display:inline" class="fas fa-trash" ></i>';
    trashButton.classList.add('trash-btn');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    bookDiv.getElementsByTagName("li")[0].style.cssFloat="left";
    bookDiv.getElementsByTagName("li")[0].style.textAlign="left";

    document.getElementById("empty-txt").style.display = "none";

    document.getElementById("buy").style.display = "block";
    
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
    
    alert("New Item in cart");
    
     
    if(totalPrice >= 100){
        
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        let  totals;
        if(localStorage.getItem("totals") === null  ){
            totals = [];
           
    
        }else{
            totals = JSON.parse(localStorage.getItem("totals"));
            
       
        }
        totals[0] = parseFloat(total_price[0]) - (10/100) * total_price[0] ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
    }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
    
    }
    saveLocalBook(quantityInput1.value +" (x) " + title1.innerHTML +" " +priceToRemove1.innerHTML , priceToRemove1.innerHTML );
    saveLocalPrice(document.getElementById("total-price").innerHTML);
    }
}

function addBook2(event){
    
   
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');
     if(quantityInput2.value === "" ){
         quantityInput2.value = 1;
         
    }else if(quantityInput2.value === "0"){
        alert("Please enter a valid amount.");

    }else{
    total = quantityInput2.value*price2.innerHTML;
    let storeBook = quantityInput2.value +" (x) " + title2.innerHTML;
    newBook.innerHTML = storeBook;
    if(localStorage.getItem("total_price")===null){
        total_price = []; 
        totalPrice = parseFloat(totalPrice) + parseFloat(total)  ;
    }else{
        total_price = JSON.parse(localStorage.getItem("total_price"));
        totalPrice =  parseFloat(total) + parseFloat(total_price[0])  ;
       
    }
    total_price[0]=parseFloat(totalPrice);
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
   
    
    const priceToRemove2 = document.createElement('p');
    priceToRemove2.innerHTML = total.toFixed(2);
   
    priceToRemove2.classList.add('price-to-rmv2');
    bookDiv.appendChild(priceToRemove2);
    bookDiv.getElementsByTagName("p")[0].style.display="none";
    
    bookDiv.innerHTML =bookDiv.innerHTML+ priceToRemove2.innerHTML;
    bookDiv.innerHTML = bookDiv.innerHTML + " " + '<p style="display:inline"> &euro;</p>' + " ";

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i style="display:inline" class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    bookDiv.appendChild(trashButton);

    cartList.appendChild(bookDiv);
    bookDiv.getElementsByTagName("li")[0].style.cssFloat="left";
    bookDiv.getElementsByTagName("li")[0].style.marginRight="0.09453rem";
    bookDiv.getElementsByTagName("li")[0].style.textAlign="left";
   
   
    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("buy").style.display = "block";
    
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
    
    alert("New Item in cart");
    
      
    if(totalPrice >= 100){
        
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        let  totals;
        if(localStorage.getItem("totals") === null  ){
            totals = [];
           
    
        }else{
            totals = JSON.parse(localStorage.getItem("totals"));
            
       
        }
        totals[0] = parseFloat(total_price[0]) - (10/100) * total_price[0] ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
    }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
    }
    saveLocalBook(quantityInput2.value +" (x) " + title2.innerHTML +" " +priceToRemove2.innerHTML , priceToRemove2.innerHTML );
    saveLocalPrice(document.getElementById("total-price").innerHTML);
    }

}

function addBook3(event){
     
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const newBook = document.createElement('li');

     if(quantityInput3.value === "" ){
         quantityInput3.value = 1;
    }else if(quantityInput3.value === "0"){
        alert("Please enter a valid amount.");

    }else{
    
    total = quantityInput3.value*price3.innerHTML;
    

    let storeBook = quantityInput3.value +" (x) " + title3.innerHTML ;
    newBook.innerHTML = storeBook;
    if(localStorage.getItem("total_price")===null){
        total_price = []; 
        totalPrice = parseFloat(totalPrice) + parseFloat(total)  ;
    }else{
        total_price = JSON.parse(localStorage.getItem("total_price"));
        totalPrice =  parseFloat(total) + parseFloat(total_price[0])  ;
      
    }
     total_price[0]=parseFloat(totalPrice);
    newBook.classList.add('book-item');
   

    
    bookDiv.appendChild(newBook);
   
   
    
    const priceToRemove3 = document.createElement('p');
    priceToRemove3.innerHTML = total.toFixed(2);
   
    priceToRemove3.classList.add('price-to-rmv3');
    bookDiv.appendChild(priceToRemove3);
    bookDiv.getElementsByTagName("p")[0].style.display="none";
    
    bookDiv.innerHTML = bookDiv.innerHTML + priceToRemove3.innerHTML;
    bookDiv.innerHTML = bookDiv.innerHTML + " " + '<p style="display:inline"> &euro;</p>' + " ";

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i style="display:inline" class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    
    bookDiv.appendChild(trashButton);
    

    cartList.appendChild(bookDiv);
    bookDiv.getElementsByTagName("li")[0].style.cssFloat="left";
    bookDiv.getElementsByTagName("li")[0].style.textAlign="left";

    document.getElementById("empty-txt").style.display = "none";
    document.getElementById("buy").style.display = "block";
    
    document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
    alert("New Item in cart");
    
    
     
    if(totalPrice >= 100){
        
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        let  totals;
        if(localStorage.getItem("totals") === null  ){
            totals = [];
           
    
        }else{
            totals = JSON.parse(localStorage.getItem("totals"));
            
       
        }
        totals[0] = parseFloat(total_price[0]) - (10/100) * total_price[0] ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
    }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
    }
    saveLocalBook(quantityInput3.value +" (x) " + title3.innerHTML + " " +priceToRemove3.innerHTML ,priceToRemove3.innerHTML );
    saveLocalPrice(document.getElementById("total-price").innerHTML);
    }
}

function deleteItem(event){
    const item = event.target;
    if(event.target.classList == "fas fa-trash"){
  
    //?delete
   
    const bookToBuy = item.parentElement.parentElement;
    
    
    
   const priceRemove= bookToBuy.getElementsByTagName("p")[0].innerHTML
   console.log(priceRemove)
   
   if(localStorage.getItem("total_price")===null){
    total_price = []; 
    
   }else{
    total_price = JSON.parse(localStorage.getItem("total_price"));
    totalPrice =  parseFloat(total_price[0])  ;
  
    }
    totalPrice = parseFloat(totalPrice) - parseFloat(priceRemove);
    if(totalPrice <0){
        totalPrice = 0;
    }
    total_price[0]=parseFloat(totalPrice);
    
    if(total_price[0]>= 100){
        
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        let  totals;
        if(localStorage.getItem("totals") === null  ){
            totals = [];
           
    
        }else{
            totals = JSON.parse(localStorage.getItem("totals"));
            
       
        }
        totals[0] = parseFloat(total_price[0]) - (10/100) * parseFloat(total_price[0]) ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
    }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
    }
  

    removeLocalBook(bookToBuy, priceRemove);
    saveLocalPrice(document.getElementById("total-price").innerHTML);

    bookToBuy.remove();
    
    

    const cartList = document.getElementsByClassName("cart-list")[0].innerHTML;
    
    if(cartList === " " || cartList2 === " " ){
        totalPrice = 0 ;
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice);
        document.getElementById("empty-txt").style.display = "inline" ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
        

    }
}

}
function deleteItem2(event){
    const item = event.target;
    if(event.target.classList == "fas fa-trash"){
  
    //?delete

    
   
    const bookToBuy = item.parentElement.parentElement;
   
    
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }else{
       books = JSON.parse(localStorage.getItem("books"));
    }
     
    let prices;
    if(localStorage.getItem("prices") === null  ){
        prices = [];
       

    }else{
        prices = JSON.parse(localStorage.getItem("prices"));
       
    }
   
    const bookIndex = bookToBuy.children[0].innerText;
    
   const priceRemove = prices[books.indexOf(bookIndex)];
   console.log(books.indexOf(bookIndex));
   console.log(priceRemove);


   if(localStorage.getItem("total_price")===null){
    total_price = []; 
    
   }else{
    total_price = JSON.parse(localStorage.getItem("total_price"));
    totalPrice =  parseFloat(total_price[0])  ;
  
    }
    totalPrice = parseFloat(totalPrice) - parseFloat(priceRemove);
    if(totalPrice <0){
        totalPrice = 0;
    }
    total_price[0]=parseFloat(totalPrice);
    
    if(total_price[0]>= 100){
        
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        let  totals;
        if(localStorage.getItem("totals") === null  ){
            totals = [];
           
    
        }else{
            totals = JSON.parse(localStorage.getItem("totals"));
            
       
        }
        totals[0] = parseFloat(total_price[0]) - (10/100) * parseFloat(total_price[0]) ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
    }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
    }
  
   
    // totalPrice = totalPrice - parseFloat(priceRemove);
    // document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
    // if(totalPrice >= 100){
    //     newTotalPrice = totalPrice - (10/100) * totalPrice ;
    //     document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>'+parseFloat(newTotalPrice).toFixed(2) ;  
    // }else{
    //     document.getElementById("total-price").innerHTML = parseFloat(totalPrice).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
    //      document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
    // }
  

    removeLocalBook(bookToBuy,priceRemove);
    saveLocalPrice(document.getElementById("total-price").innerHTML);

    bookToBuy.remove();
    
    

    const cartList2 = document.getElementsByClassName("cart-list2")[0].innerHTML;
    
    if(cartList2 === " " || cartList === " " ){
        totalPrice = 0 ;
        document.getElementById("total-price").innerHTML = parseFloat(totalPrice);
        document.getElementById("empty-txt").style.display = "inline" ;
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:none; color:red;">  Final Price(-10%): </p>' ;
        

    }
}

}

function saveLocalBook(book, price){
    //check
    let books;
    if(localStorage.getItem("books") === null  ){
        books = [];
       

    }else{
        books = JSON.parse(localStorage.getItem("books"));
       
    }
  
    // ---------------------------------------------

    books.push(book);

    localStorage.setItem("books" , JSON.stringify(books));

    let prices;
    if(localStorage.getItem("prices") === null  ){
        prices = [];
       

    }else{
        prices = JSON.parse(localStorage.getItem("prices"));
       
    }
  
    // ---------------------------------------------

    prices.push(price);

    localStorage.setItem("prices" , JSON.stringify(prices));

}
function saveLocalPrice(total){
    //check
   let  total_price;
    if(localStorage.getItem("total_price")===null){
        total_price = [];
    }else{
        total_price = JSON.parse(localStorage.getItem("total_price"));
    }
    
   
        total_price[0] = parseFloat(total).toFixed(2);
    
    
    localStorage.setItem("total_price", JSON.stringify(total_price));

       //check
    let  totals;
       if(localStorage.getItem("totals") === null  ){
           totals = [];
          
   
       }else{
           totals = JSON.parse(localStorage.getItem("totals"));
          
       }
     
       // ---------------------------------------------
       if(parseFloat(total).toFixed(2) >= 100){
           totals[0] = parseFloat(total).toFixed(2) - (10/100) * parseFloat(total).toFixed(2) ;
          
       }else{
           totals[0]=parseFloat(total).toFixed(2);
   
       }
      
       localStorage.setItem("totals" , JSON.stringify(totals));
   
}

function removeLocalBook(book , price ){
    //check
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }else{
       books = JSON.parse(localStorage.getItem("books"));
    }

  
   
   const bookIndex = book.children[0].innerText;
   books.splice(books.indexOf(bookIndex),1);
   localStorage.setItem("books", JSON.stringify(books));

    //check
    let prices;
    if(localStorage.getItem("prices") === null){
        prices = [];
    }else{
      prices = JSON.parse(localStorage.getItem("prices"));
    }

   
   
   prices.splice(prices.indexOf(price),1);
   localStorage.setItem("prices", JSON.stringify(prices));

}

function getBooks(){
    //check
    
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem("books"));
    }
    let  total_price;
    if(localStorage.getItem("total_price")===null){
        total_price = [];
    }else{
        total_price = JSON.parse(localStorage.getItem("total_price"));
    }
    let  totals;
       if(localStorage.getItem("totals") === null  ){
           totals = [];
          
   
       }else{
           totals = JSON.parse(localStorage.getItem("totals"));
          
       }
     // ---------------------------------------------

     books.forEach(function(book){
        const bookDiv = document.createElement('div');
         bookDiv.classList.add('book');
        const newBook = document.createElement('li');
        
       newBook.innerHTML = book;
       
       newBook.classList.add('book-item');
      
   
       
       bookDiv.appendChild(newBook);
       
    
       
   
       const trashButton = document.createElement('button');
       trashButton.innerHTML = '<i style="display:inline" class="fas fa-trash"></i>';
       trashButton.classList.add('trash-btn');
       bookDiv.appendChild(trashButton);
   
       cartList2.appendChild(bookDiv);
       bookDiv.getElementsByTagName("li")[0].style.cssFloat="left";
       bookDiv.getElementsByTagName("li")[0].style.textAlign="left";
       document.getElementById("empty-txt").style.display = "none";
       document.getElementById("buy").style.display = "block";

       if(total_price[0] >= 100){
       
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
       
       
        document.getElementById("total-price-msg").innerHTML =  '<p style="display:inline; color:red;">  Final Price(-10%): </p>' + parseFloat(totals[0]).toFixed(2) ;
       }else{
        document.getElementById("total-price").innerHTML = parseFloat(total_price[0]).toFixed(2)+ '<p style="display:inline"> &euro;</p>';
        }
    
    

});
     
}

function Endorser(){
    
    var xmlString = "";


//check
   let books;
   if(localStorage.getItem("books") === null){
       books = [];
   }else{
       books = JSON.parse(localStorage.getItem("books"));
   }


for (i = 0; i < books.length ;i++){
 xmlString = xmlString + "<bookinfo>" + books[i] + "</bookinfo>" ;

}
xmlString = "<bookstore>" +"<orderinfo>" + xmlString  + "</orderinfo>"+ "</bookstore>";;
 
    
console.log(xmlString);
var parser, xmlDoc;
parser = new DOMParser();
xmlDoc = parser.parseFromString(xmlString,"text/xml");
x = xmlDoc.documentElement.childNodes;
document.getElementById("demo").innerHTML = "You bougth:" + xmlString;


}