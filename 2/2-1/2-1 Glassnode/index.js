const fuction = document.getElementById('function');
const search = document.getElementById('search');
const input = document.getElementById('input');
const body = document.getElementById('body');
const clear = document.getElementById('clear');

input.addEventListener('focus', () => {
    fuction.classList.add('active');
    body.classList.add('activeBody');
});

input.addEventListener('blur', ()=> {
    fuction.classList.remove('active');
    body.classList.remove('activeBody');
});

const hamburger = document.getElementById('hamburger');
const modelBtn = document.getElementById('model-list');
const model = document.getElementById('model');

hamburger.addEventListener('click', () => {
    model.classList.add('click');
});

modelBtn.addEventListener('click', () => {
    model.classList.remove('click');
});


const search_btn = document.getElementById('search-btn');
const back = document.getElementById('back');
const navbar = document.getElementById('navbar');

search_btn.addEventListener('click', () => {
    navbar.classList.add('search-open');
});

back.addEventListener('click', () => {
    navbar.classList.remove('search-open');
});