// липкая навигация
var navbar = document.getElementById("navbar");
  var glue = navbar.offsetTop;
  window.onscroll = function() { navigatorGlue(); };

function navigatorGlue() {
  if (window.pageYOffset >= glue) {
    navbar.classList.add("glue");
  } else {
    navbar.classList.remove("glue");
  }
}


// button return up
window.onload = function() {
  var scrolled;
  var back=document.getElementById('top');
  back.onclick = function () {
      scrolled = window.pageYOffset;
      scrollBackUp(); 
  };
  function scrollBackUp(){
      if (scrolled>0) {
          window.scrollTo(0, scrolled);
          scrolled-=100; 
          timer = setTimeout(scrollBackUp, 30);
      }
      else {
          clearTimeout(timer);
          window.scrollTo(0,0);
      }
  }
};

$(window).scroll(function (event) {
  var top = $(window).scrollTop();
   if(top >= 150){
    document.getElementById('top').style.opacity="1"
   } else {
    document.getElementById('top').style.opacity="0";
   }
});

// Google map
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
