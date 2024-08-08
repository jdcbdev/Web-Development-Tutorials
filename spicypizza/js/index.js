let b = document.querySelector(".burger-icon")
let mobile_nav = document.querySelector(".mobile-nav")

b.addEventListener("click", function(){
    mobile_nav.classList.toggle("d-block")
    mobile_nav.classList.toggle("d-none")
})