const dropDown = document.querySelectorAll('.dropdown-name');
const burger = document.querySelector('.burger');

// console.log(dropDown);

dropDown.forEach((list,index)=>{
    list.addEventListener('click',()=>{
        list.nextElementSibling.classList.toggle('nav--inside-ul-active');
    });
});

burger.addEventListener('click',()=>{
    const navUl = document.querySelector('.nav-ul');
    navUl.classList.toggle('mobile-nav-ul-active');
    burger.children[0].classList.toggle('burger-img-close');
});