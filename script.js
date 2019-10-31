//Sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 4000
});

//Scrollspy
const scrollspy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollspy, {});
