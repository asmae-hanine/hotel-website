
// let the menu to be responsive on phone

let menu = document.querySelectorAll('#menu');
let navbar = document.querySelectorAll('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

