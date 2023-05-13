//meri search
function filterFunction() {
    var i;
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    var a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  


//slideshow
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  

//kafe

var productName = sessionStorage.getItem('productName');

$("#productName").text(productName);

if (productName === "Keyboard") {
    $("#product").attr("src","img/product1.png");
}
if (productName === "Mouse") {
    $("#product").attr("src","img/product2.png");
}
if (productName === "Camera") {
    $("#product").attr("src","img/product3.png").style.padding = '50px';
}
if (productName === "Speakers") {
    $("#product").attr("src","img/product4.png");
}
if (productName === "Router") {
    $("#product").attr("src","img/product5.png");
}
if (productName === "Receiver") {
    $("#product").attr("src","img/product6.png");
}
if (productName === "Chip") {
    $("#product").attr("src","img/product7.png");
}
if (productName === "Battery") {
    $("#product").attr("src","img/product8.png");
}
if (productName === "Cd Holder") {
    $("#product").attr("src","img/product9.png");
}