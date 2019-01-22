var pic = 1;
showPic(pic);

//Izvēlas nākamo bildi
function nextPic(n) {
    showPic(pic += n);
  }

  //Attēlo bildi
function showPic(n){
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {pic = 1}    
    if (n < 1) {pic = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[pic-1].style.display = "block";  
}
//Arrow ctrl
document.onkeydown = function(key) {
    key = key || window.event;
    if (key.keyCode == 39) {
        nextPic(1);
    }
    else if (key.keyCode == 37) {
      nextPic(-1);
  }
};