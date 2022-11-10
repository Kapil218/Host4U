var chooseplanbutton = document.querySelectorAll(".btn");
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
var nobackdropmodal = document.querySelector(".modal__action--negative");
var togglebutton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
for (var i = 0; i < chooseplanbutton.length; i++) {
  chooseplanbutton[i].addEventListener("click", function () {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}
if (nobackdropmodal) {
  nobackdropmodal.addEventListener("click", closemodal);
}
backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closemodal();
});
function closemodal() {
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  modal.classList.remove("open");
}
togglebutton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
