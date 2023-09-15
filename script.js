let menu = document.querySelector(".menu")
let links = document.querySelector(".links")

menu.onclick = function(){
    links.classList.toggle("active");
    menu.classList.toggle("fa-times")
}