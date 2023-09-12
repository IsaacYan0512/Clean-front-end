document.addEventListener("DOMContentLoaded", function () {
  let navToggler = document.getElementById("nav-toggler");
  let navbarLinks = document.getElementById("navbar-links");
  let container = document.querySelector(".container"); // 获取 .navbar 元素

  navToggler.addEventListener("click", function () {
      navbarLinks.classList.toggle("active");

      // 检查链接是否处于 active 状态
      if (navbarLinks.classList.contains("active")) {
        container.classList.add("expanded"); // 添加扩展高度的样式
      } else {
        container.classList.remove("expanded"); // 移除扩展高度的样式
      }
  });
});