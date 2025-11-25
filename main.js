document.addEventListener("DOMContentLoaded", () =>{ 
    let icon_menu = document.querySelector(".img-hmb-menu")
    let menu = document.querySelector(".menu")
    if(icon_menu && menu){
        icon_menu.addEventListener("click", ()=>{
           menu.classList.toggle("menu-open")
        })
    }
})