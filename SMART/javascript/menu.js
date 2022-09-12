let menu = trabajo.getElementsByClassName("menu-header")[0]
let enlaces = trabajo.getElementById("enlaces");
let contadorMenu = 1;

menu.addEventListener("click", function () {
    enlaces.classList.toggle('menudos');

    contadorMenu++;
})


enlaces.addEventListener('click', function (e) {
    enlaces.classList.toggle('menudos');
});