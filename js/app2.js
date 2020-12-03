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