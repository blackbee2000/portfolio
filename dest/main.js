let loading = document.querySelector(".loading");
loading.classList.add("active-loading");
loading.classList.remove("remove-loading");
//loading
setTimeout(() => {
  loading.classList.remove("active-loading");
  loading.classList.add("remove-loading");
}, 3000);

//hover section 1
const titleFrontEnd = document.querySelector(".position__image_text");

function followImageCursor(event, titleFrontEnd) {
  const contentBox = titleFrontEnd.getBoundingClientRect();
  const dx = event.pageX - contentBox.x;
  const dy = event.pageY - contentBox.y;
  const image = document.querySelector(".position__image_text-img");
  image.style.transform = `translate(${dx}px, ${dy}px)`;
}

titleFrontEnd.addEventListener("mousemove", (event) => {
  setInterval(followImageCursor(event, titleFrontEnd), 1000);
});

//Scroll Background for Header
let header = document.querySelector("header");
function changeBackground() {
  let scrollY = window.pageYOffset;
  if (scrollY > 80) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
}
document.addEventListener("scroll", function () {
  changeBackground();
});

let menuHeader = document.querySelectorAll(".menu .menu__list li a");
for (let i = 0; i < menuHeader.length; i++) {
  menuHeader[i].addEventListener("click", function () {
    menuHeader.forEach(function (menuItem) {
      menuItem.classList.remove("active-menu-item");
    });
    this.classList.add("active-menu-item");
  });
}
//C

$(document).ready(function () {
  let isMenu = false;

  $(".btn-menu").click(() => {
    if (!isMenu) {
      header.classList.remove("active-header");
      $("body").css({ overflow: "hidden" });
      $(".btn-menu").addClass("active-button-menu");
      $(".menu").addClass("active-menu");
      $(".menu__list_home").addClass("active-list-home");
      $(".menu__list_project").addClass("active-list-project");
      $(".menu__list_about").addClass("active-list-about");
      $(".menu__line_line").addClass("active-line");
      $(".menu__email").addClass("active-email");
      $(".menu__phone").addClass("active-phone");
      $(".menu__footer_designBy").addClass("active-footer");
      $(".menu__footer_social").addClass("active-footer");
      isMenu = true;
    } else {
      isMenu = false;
      setTimeout(() => {
        $(".menu__line_line").removeClass("active-line");
        $(".menu__email").removeClass("active-email");
        $(".menu__phone").removeClass("active-phone");
        $(".menu__footer_designBy").removeClass("active-footer");
        $(".menu__footer_social").removeClass("active-footer");
      }, 0);
      setTimeout(() => {
        $(".btn-menu").removeClass("active-button-menu");
        $(".menu__list_about").removeClass("active-list-about");
      }, 400);
      setTimeout(() => {
        $(".menu__list_project").removeClass("active-list-project");
      }, 800);
      setTimeout(() => {
        $(".menu__list_home").removeClass("active-list-home");
      }, 1200);
      setTimeout(() => {
        $(".menu").removeClass("active-menu");
        $("body").css({ overflow: "initial" });
      }, 1600);
      setTimeout(() => {
        if (scrollY > 80) {
          header.classList.add("active-header");
        } else {
          header.classList.remove("active-header");
        }
      }, 1700);
    }
  });

  //scroll to element
  let home = $(".position");
  let project = $(".project");
  let about = $(".about");
  let listMenu = $(".menu .menu__list li a");
  listMenu.each(function (index) {
    $(this).click(function () {
      isMenu = false;
      setTimeout(() => {
        $(".menu__line_line").removeClass("active-line");
        $(".menu__email").removeClass("active-email");
        $(".menu__phone").removeClass("active-phone");
        $(".menu__footer_designBy").removeClass("active-footer");
        $(".menu__footer_social").removeClass("active-footer");
      }, 0);
      setTimeout(() => {
        $(".btn-menu").removeClass("active-button-menu");
        $(".menu__list_about").removeClass("active-list-about");
      }, 400);
      setTimeout(() => {
        $(".menu__list_project").removeClass("active-list-project");
      }, 800);
      setTimeout(() => {
        $(".menu__list_home").removeClass("active-list-home");
      }, 1200);
      setTimeout(() => {
        $(".menu").removeClass("active-menu");
        $("body").css({ overflow: "initial" });
      }, 1600);
      setTimeout(() => {
        if (scrollY > 80) {
          header.classList.add("active-header");
        } else {
          header.classList.remove("active-header");
        }
      }, 1700);
      if ($(this).text() === "Home") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: home.offset().top },
          "1000"
        );
      }
      if ($(this).text() === "Project") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: project.offset().top + 170 },
          "1000"
        );
      }
      if ($(this).text() === "About") {
        $([document.documentElement, document.body]).animate(
          { scrollTop: about.offset().top },
          "1000"
        );
      }
    });
  });

  //mail to

  $(".btn-let-talk").click(() => {
    window.location = "mailto:linhmk2905@gmail.com";
  });

  $(".contact__btn_text").click(() => {
    window.location = "mailto:linhmk2905@gmail.com";
  });

  $(".menu__email_mail").click(() => {
    window.location = "mailto:linhmk2905@gmail.com";
  });

  $(".menu__phone_phone").click(() => {
    window.open("tel:0329011861", "_self");
  });

  //ontop
  $(".logo").click(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

//library
AOS.init();
