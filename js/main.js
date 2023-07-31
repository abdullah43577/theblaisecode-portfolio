// Mobile Menu Icon
let menu = document.querySelector(".mobile-menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
   navbar.classList.toggle("open-menu");
   menu.classList.toggle("move");
};
window.onscroll = () => {
   navbar.classList.remove("open-menu");
   menu.classList.remove("move");
};



// Scroll to Top
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
   scrollTop.classList.toggle("scroll-active", window.scrollY > 300);
});

// Toggle light/dark theme
const checkbox = document.getElementById("checkbox");
// Function to set the theme
const setTheme = (theme) => {
   const body = document.body;
   body.setAttribute("data-theme", theme);
   localStorage.setItem("theme", theme);
};

// Function to toggle the theme
const toggleTheme = () => {
   const body = document.body;
   const currentTheme = body.getAttribute("data-theme");
   const newTheme = currentTheme === "dark" ? "light" : "dark";
   setTheme(newTheme);
};

// Event listener for the toggle switch
checkbox.addEventListener("change", toggleTheme);

// Apply the stored theme when the page loads
window.addEventListener("load", () => {
   const savedTheme = localStorage.getItem("theme");
   if (savedTheme) {
      setTheme(savedTheme);
      checkbox.checked = savedTheme === "light";
   }
});

// Date at page bottom
function loadDate() {
   const display = document.getElementById("today-date");
   const year = new Date().getFullYear();
   display.innerHTML = year;
}
window.onload = () => {
   loadDate();
};

// PopUp Modal (Aboutme/Meetme) NO ANIMATION
// const modal = document.querySelector(".overlay");
// const aboutPopUpModal = document.querySelector("#aboutPopUpModal");
// const openPopUpModal = document.querySelector("#popUpModal");
// const closePopUpModal = document.querySelector(".closeModalButton");

// aboutPopUpModal.onclick = () => {
//    modal.style.display = "block";
// };

// openPopUpModal.onclick = () => {
//    modal.style.display = "block";
// };

// closePopUpModal.onclick = () => {
//    modal.style.display = "none";
// };

// PopUp Modal (Aboutme/Meetme) ANIMATION INCLUDED
const overlay = document.querySelector(".overlay");
const aboutPopUpModal = document.querySelector("#aboutPopUpModal");
const openPopUpModal = document.querySelector("#popUpModal");
const closePopUpModal = document.querySelector(".closeModalButton");
overlay.addEventListener("animationend", () => {
   if (overlay.classList.contains("close")) {
      overlay.classList.remove("open");
      overlay.classList.remove("close");
   }
});

aboutPopUpModal.addEventListener("click", () => {
   overlay.classList.add("open");
});

closePopUpModal.addEventListener("click", () => {
   overlay.classList.add("close");
});

openPopUpModal.addEventListener("click", () => {
   overlay.classList.add("open");
});
