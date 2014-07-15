// console.log("script loaded");

function menuToggle() {
  document.body.classList.toggle("menu");

  // var element = document.getElementById('menu-items');
  // element.style.display = (element.style.display == "inherit"
  //   ? "none"
  //   : "inherit");
};

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);