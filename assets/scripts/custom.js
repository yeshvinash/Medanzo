let elementes = document.querySelectorAll(".header-nav");
elementes.forEach(a => {
  a.addEventListener("click", function() {
    elementes.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

// _BEGIN > Function For Navigation Menu < AVN //
$(".toggle-btn").click(function() {
  $("html").toggleClass("show-menu");
});
// _ENDS > Function For Navigation Menu < AVN //
