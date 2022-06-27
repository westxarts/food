let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventlistener("click", function (){
	navbar.classList.toggle(".active");
});

window.onscroll = () => {
	navbar.classList.remove(".active");
};