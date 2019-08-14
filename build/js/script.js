(function () {
  var isMobile = false;
  $(document).ready(function () {
    if ($('body').width() <= 768) {
      isMobile = true;
    }
    if (isMobile) {
      $(document).ready(function () {
        $('.footer-contaner__collapse').click(function () {
          $(this).toggleClass('active');
          $(this).next().slideToggle();
        });
      });
    }
  });
})();

(function () {
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
    scrollHid.classList.remove("scroll-hidden");
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
})();

(function () {
  window.addEventListener("DOMContentLoaded", function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }

    function mask(event) {
      let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
      if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
    };
    
    let inputPopup = document.querySelector(".popup-phone");
    let inputFooter = document.querySelector(".feedback-phone");
    inputPopup.addEventListener("input", mask, false);
    inputPopup.addEventListener("focus", mask, false);
    inputPopup.addEventListener("blur", mask, false);
    inputFooter.addEventListener("input", mask, false);
    inputFooter.addEventListener("focus", mask, false);
    inputFooter.addEventListener("blur", mask, false);
  });
})();
