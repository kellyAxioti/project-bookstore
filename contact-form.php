<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./styling/styleC.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
</head>
<body onhashchange = "showSavedCart()">
    <div class="grid-container">
      <div id="overlay">
        <button id="close-cart" onclick="off()">Close</button>
        <div id="text"><hr>Your Cart<hr>
          <div id="empty-txt">No items in cart yet.</div>
          <div class="cart-container">
            <ul class="cart-list"></ul>
            <div class="total-price"><hr>Total Price:
              <p id="total-price">0</p><hr>
              <button id="buy" style="display: none;" >Buy</button>
            </div>
            
        </div>
        </div>
     </div>
         <div class="overlay-cart"></div>
        <div class="overlay"> 
            <!-- close button nav -->
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            
            
            
                <div class="overlay-content">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li> <a href="products.html">Products</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        <div class="nav">
            <span class="burger"  id="burger" onclick="openNav()">&#9776;</span>
            <div class="desk-nav">
            <a href="home.html">Home</a>
            <a href="products.html">Products</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
            
            <span class="cart" onclick="on()">Cart<i class="fas fa-shopping-cart"></i></span>
        </div>
        <div class="main">
            <div class="welcome-img">
                <picture>
                    <source media="(min-width: 1200px)" srcset="images/books-1.jpg">
                    <source media="(max-width: 768px)" srcset="images/books.jpg">
                    <img src="./images/books-1.jpg" alt="books" height="500" width="100%" >
                </picture>
                 <h3 style="text-align:center; margin-top:10vh;">Thank you for your message! We will contact you soon! </h3>
                
              </div>
        </div>
    </div>
      </div>
      <script src="js/app2.js"></script>
</body>
</html>

<?php
$fname=$_POST["fname"];
$lname=$_POST["lname"];
$email=$_POST["email"];
$message=$_POST["message"];

  $file=fopen("data/form-data.txt","a");
  fwrite($file," ".date("Y/m/d")."-".$lname." ".$fname."(".$email.") sent a message to info@bookstore.gr. Message: ".$message."\n");
  fclose($file);

?>