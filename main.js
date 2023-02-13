// AOS FUNCTION
// AOS FUNCTION
AOS.init({
  duration: 1200,
});

// icon hover effetc
// icon hover effetc
$(".statistics .icon-box i").each(function () {
  $(this).mouseenter(function () {
    $(this).addClass("fa-shake");
  });
  $(this).mouseleave(function () {
    $(this).removeClass("fa-shake");
  });
});

// sticky navbar
// sticky navbar
window.onscroll = function () {
  myFunction();
};
var navbar = document.querySelector(".sticky-nav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


 

