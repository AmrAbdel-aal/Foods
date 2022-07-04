
let navBar = document.querySelector('.navbar');
let menuIcon = document.querySelector('.menu-btn');


menuIcon.addEventListener('click',()=>{
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('active');

});


let icons = document.querySelectorAll('.section-1-icons i');
console.log(icons);


 let i =0;
 setInterval(()=>{
    i++;
    if(i===icons.length){
        icons[i-1].classList.remove('active');
        i=0;
        icons[i].classList.add('active');
    }
    icons[i-1].classList.remove('active');
    icons[i].classList.add('active');
    
   
    
 },4000)  