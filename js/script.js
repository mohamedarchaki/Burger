let menu = document.getElementById("menu");
let spn=document.getElementsByClassName("span");
let levr_menu = document.querySelector(".levr-menu") 

menu.onclick= function () {
    spn[0].classList.toggle("is-active")
    spn[1].classList.toggle("is-active")
    spn[2].classList.toggle("is-active")
    levr_menu.classList.toggle("is-active")
}

// scroll container 

let lastBtn = document.getElementById("lstBtn");
let nextBtn = document.getElementById("nextBtn");
let contScroll = document.getElementById("container-scrol")

contScroll.addEventListener("wheel", (evt) =>{
        evt.preventDefault();
        contScroll.scrollLeft += evt.deltaY;
    })

nextBtn.addEventListener("click", () =>{
    contScroll.scrollLeft +=300;
}) 
lastBtn.addEventListener("click", () =>{
    contScroll.scrollLeft -=300;
}) 