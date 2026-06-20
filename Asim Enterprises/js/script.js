const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");


if(navLinks.style.display==="flex"){
navLinks.style.display="none";
}
else{
navLinks.style.display="flex";
}

});