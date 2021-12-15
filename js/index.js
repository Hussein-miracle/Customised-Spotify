"use strict";
const body = document.querySelector(".body")
const openMenuBtn = document.querySelector(".menu")
const menuIcon = document.querySelector(".menu__icon");

let isCloseRendered = false;

function renderCloseIcon(){
    
    const markup1 = `<use id="menu__close" xlink:href ="./icons/sprite.svg#icon-arrow-left"></use>`;
    const markup2 = `<use  xlink:href ="./icons/sprite.svg#icon-menu"></use>`;

    const markup = isCloseRendered ? markup1 : markup2; 
    // console.log(isCloseRendered);

    menuIcon.innerHTML =`${markup}`;


    // menuIcon.insertAdjacentHTML("afterbegin",markup);
    // const closeMenuBtn = document.querySelector("#menu__close");
    // console.log(closeMenuBtn);
    // closeMenuBtn.addEventListener("click",() => {
    //     body.classList.remove("show-nav");
    //     // isRendered = false;
    // })



}


//nav button not yet full fixed
openMenuBtn.addEventListener("click",()=>{
    // console.log(e.target)
    body.classList.toggle("show-nav");
    if(!isCloseRendered) { 
        renderCloseIcon();
        isCloseRendered = true;
    }
    
    // console.log(!isCloseRendered);

    
})

// if(isCloseRendered){
//     const markup = `<use  xlink:href ="./icons/sprite.svg#icon-menu"></use>`
//     menuIcon.innerHTML =" ";
//     menuIcon.insertAdjacentHTML("afterbegin",markup);

//     isCloseRendered = false;


// }