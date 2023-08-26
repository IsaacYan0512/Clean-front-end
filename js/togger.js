$(document).ready(function () {
    // 找到导航按钮和导航链接容器
    let navToggler = $('#nav-toggler');
    let navbarLinks = $('#navbar-links');
  
    // 导航按钮点击事件
    navToggler.click(function () {
      console.log('Button Clicked'); // 添加这行
      // 切换按钮的active类
      navToggler.toggleClass('active');
  
      // 显示或隐藏导航链接容器
      navbarLinks.slideToggle();
    });
  
    // 在窗口大小改变时，检查是否要重新显示导航链接容器
    $(window).resize(function () {
      let windowWidth = $(window).width();
      if (windowWidth > 992) {
        navToggler.removeClass('active');
        navbarLinks.css('display', 'flex');
      } else {
        navbarLinks.css('display', 'none');
      }
    });
  });
  