//  Open/close form-search
const formInput = document.querySelector("#form-input");

const handleClickToClose = () => {
  formInput.style.visibility = "hidden";
  formInput.style.opacity = "0";
};

const handleClickToOpen = () => {
  formInput.style.visibility = "visible";
  formInput.style.opacity = "1";
};

// Ensure initial state
formInput.style.visibility = "hidden";
formInput.style.opacity = "0";
// Open/close hidden menu
const subHiddenMenuHome = document.querySelector(".sub-bottom-menu-home");
const subHiddenMenuService = document.querySelector(
  ".sub-bottom-menu-services"
);
const subHiddenMenuBlog = document.querySelector(".sub-bottom-menu-blog");
const subHiddenMenuPage = document.querySelector(".sub-bottom-menu-page");

//HOME
const handleClickToOpenHiddenMenuHome = () => {
  if (
    subHiddenMenuHome.style.visibility === "" ||
    subHiddenMenuHome.style.visibility === "hidden"
  ) {
    subHiddenMenuHome.style.visibility = "visible";
    subHiddenMenuHome.style.opacity = "1";
    subHiddenMenuHome.style.minHeight = "80px";
  } else {
    subHiddenMenuHome.style.visibility = "hidden";
    subHiddenMenuHome.style.opacity = "0";
    subHiddenMenuHome.style.minHeight = "0";
  }
};

//SERVICES
const handleClickToOpenHiddenMenuServices = () => {
  if (
    subHiddenMenuService.style.visibility === "" ||
    subHiddenMenuService.style.visibility === "hidden"
  ) {
    subHiddenMenuService.style.visibility = "visible";
    subHiddenMenuService.style.opacity = "1";
    subHiddenMenuService.style.minHeight = "80px";
  } else {
    subHiddenMenuService.style.visibility = "hidden";
    subHiddenMenuService.style.opacity = "0";
    subHiddenMenuService.style.minHeight = "0";
  }
};

//BLOG

const handleClickToOpenHiddenMenuBlog = () => {
  if (
    subHiddenMenuBlog.style.visibility === "" ||
    subHiddenMenuBlog.style.visibility === "hidden"
  ) {
    subHiddenMenuBlog.style.visibility = "visible";
    subHiddenMenuBlog.style.opacity = "1";
    subHiddenMenuBlog.style.minHeight = "80px";
  } else {
    subHiddenMenuBlog.style.visibility = "hidden";
    subHiddenMenuBlog.style.opacity = "0";
    subHiddenMenuBlog.style.minHeight = "0";
  }
};

//PAGES

const handleClickToOpenHiddenMenuPage = () => {
  if (
    subHiddenMenuPage.style.visibility === "" ||
    subHiddenMenuPage.style.visibility === "hidden"
  ) {
    subHiddenMenuPage.style.visibility = "visible";
    subHiddenMenuPage.style.opacity = "1";
    subHiddenMenuPage.style.minHeight = "220px";
  } else {
    subHiddenMenuPage.style.visibility = "hidden";
    subHiddenMenuPage.style.opacity = "0";
    subHiddenMenuPage.style.minHeight = "0";
  }
};

// Ensure initial state home
subHiddenMenuHome.style.visibility = "hidden";
subHiddenMenuHome.style.opacity = "0";

// Ensure initial state services
subHiddenMenuService.style.visibility = "hidden";
subHiddenMenuService.style.opacity = "0";

// Ensure initial state blog
subHiddenMenuBlog.style.visibility = "hidden";
subHiddenMenuBlog.style.opacity = "0";

// Ensure initial state page
subHiddenMenuPage.style.visibility = "hidden";
subHiddenMenuPage.style.opacity = "0";

//Click to Open/Close hidden menu
// const headerHiddenRight = document.querySelector(".header-hidden-right");
// const headerHiddenOverPlay = document.querySelector(".over-play");

// const handleOpenHiddenMenuRight = () => {
//   headerHiddenRight.classList.remove("hidden");
//   headerHiddenRight.classList.add("block");
//   headerHiddenRight.style.transform = "translateX(0)";
//   headerHiddenOverPlay.classList.remove("hidden");
//   headerHiddenOverPlay.classList.add("block");
// };

// const handleCloseHiddenMenuRight = () => {
//   headerHiddenRight.style.transform = "translateX(500px)";
//   setTimeout(() => {
//     headerHiddenRight.classList.remove("block");
//     headerHiddenRight.classList.add("hidden");
//   }, 1000); // Match the duration of the CSS transition
//   headerHiddenOverPlay.classList.remove("block");
//   headerHiddenOverPlay.classList.add("hidden");
// };

// // Ensure initial state
// headerHiddenRight.classList.add("hidden");
// headerHiddenRight.style.transform = "translateX(500px)";
$(".icon-menu-bar").click(function () {
  var windowWidth = $(window).width();

  $(".over-play").css("display") === "none"
    ? $(".over-play").css("display", "block")
    : $(".over-play").css("display", "none");

  var leftPosition;
  if (windowWidth < 760) {
    leftPosition = "0";
  } else if (windowWidth < 800) {
    leftPosition = "42%";
  } else if (windowWidth < 1000) {
    leftPosition = "45%";
  } else {
    leftPosition = "56%";
  }

  $(".header-hidden-right")
    .stop(true, true)
    .delay(100)
    .animate({ left: leftPosition }, 600); // Added delay
});
$(".icon-x").click(function () {
  $(".header-hidden-right")
    .stop(true, true)
    .delay(100)
    .animate({ left: "100%" }, 600); // Added delay

  $(".over-play").css("display") === "block"
    ? $(".over-play").css("display", "none")
    : $(".over-play").css("display", "block");
});

//Faq js
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".faq-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      // Đóng tất cả các nội dung FAQ trước khi mở cái mới
      document.querySelectorAll(".faq-content").forEach((content) => {
        content.style.maxHeight = null;
      });

      document.querySelectorAll(".faq-icon i").forEach((icon) => {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      });

      document.querySelectorAll(".faq-icon").forEach((icon) => {
        icon.classList.remove("bg-secondary");
        icon.classList.add("bg-orange-500");
      });

      // Mở nội dung của thẻ được click
      const content = this.nextElementSibling;
      if (!content.style.maxHeight || content.style.maxHeight === "0px") {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }

      // Đổi icon
      const icon = this.querySelector(".faq-icon i");
      if (content.style.maxHeight) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");

        this.querySelector(".faq-icon").classList.remove("bg-orange-500");
        this.querySelector(".faq-icon").classList.add("bg-secondary");
      }
    });
  });
});
