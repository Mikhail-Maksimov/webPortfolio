function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")//target these 2 elements
    menu.classList.toggle("open")//adds or removes the "open" class for CSS
    icon.classList.toggle("open")
}