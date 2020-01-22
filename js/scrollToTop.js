var buttonTop = document.getElementById("scroll-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 620) {
    
    buttonTop.style.opacity = 1;
  }
  else {
    buttonTop.style.opacity = 0;
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}