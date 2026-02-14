const menuBtn = document.getElementById("menuBtn");
const sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener("click", () => {
    sidenav.classList.toggle("collapsed");
});
