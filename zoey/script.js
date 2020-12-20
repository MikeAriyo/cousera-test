/* Making the menu button show/hide on click event */
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setInterval(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
