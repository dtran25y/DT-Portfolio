//This is my js ==>> John Script

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button")

// Open Menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
// Close Menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click 
());