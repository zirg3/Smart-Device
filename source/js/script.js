let write = document.querySelector(".page-header__call");
let popup = document.querySelector(".popup-feedback");
let close = document.querySelector(".popup-feedback__svg-close");
let scrollHid = document.querySelector(".scroll-vissible");
let back = document.querySelector(".popup-wrap");

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-feedback__show");
  scrollHid.classList.add("scroll-hidden");
  back.classList.add("popup-wrap--open");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-feedback__show");
  scrollHid.classList.remove("scrol-hidden");
  back.classList.remove("popup-wrap--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-feedback__show")) {
      popup.classList.remove("popup-feedback__show");
      scrollHid.classList.remove("scroll-hidden");
      back.classList.remove("popup-wrap--open");
    }
  }
});
