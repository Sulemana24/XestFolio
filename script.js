// Toggle navigation menu
const menuBtn = document.getElementById("menu-line");
const navLinks = document.getElementById("ul-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("translate-y-0");
    navLinks.classList.toggle("-translate-y-full");

    const isOpen = navLinks.classList.contains("translate-y-0");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.add("-translate-y-full");
    navLinks.classList.remove("translate-y-0");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Update footer year automatically
document.getElementById('footer-year').textContent = new Date().getFullYear();
