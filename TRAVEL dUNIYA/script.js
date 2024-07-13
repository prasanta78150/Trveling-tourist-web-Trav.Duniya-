let searchBtn=document.querySelector("#search-btn");
let searchbar=document.querySelector(".search-bar-container");

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchbar.classList.remove('active');  
}

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})

let formbtn = document.querySelector("#login-btn");
let loginform = document.querySelector(".login-form-container");
let formclose = document.querySelector(' .login-form-container i  ');

formbtn.addEventListener('click', () => {
    loginform.classList.add('active');
});

formclose.addEventListener('click', () => {
    loginform.classList.remove('active');
});
// ---for menu bar medeai query---------

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

// ----------home control Section------

let videobtn=document.querySelectorAll('.vid-btn ');

videobtn.forEach(btn =>{
btn.addEventListener('click',() => {
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
// let src=btn.getAttribute('data-src');
// document.querySelectorAll('#video-slider').src=src;
document.getElementById('video-slider').src = btn.getAttribute('data-src');

    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
autoplay:{
    Delay:2500,
    disableOnInteraction:false,
},


breakpoints: {
    640: {
        slidesPerView: 1,

    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
},
});