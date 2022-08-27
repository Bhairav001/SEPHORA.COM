let div = document.getElementById('M-D-1');
let p = document.getElementById('M-store-span');

function downList(){
    p.classList.toggle("open");
    div.classList.toggle("open");
}

let div2 = document.getElementById('M-C-D');
let p2 = document.getElementById('M-C-span');

function drpDwn(){
    p2.classList.toggle("open");
    div2.classList.toggle("open");
}

let image = document.querySelector('.M-signIn-btn1-img');
let p3 = document.querySelector('.M-signIn-span1');
let div3 = document.querySelector('.M-S-D');

function drpDwn1(){
    image.classList.toggle("open");
    p3.classList.toggle("open");
    div3.classList.toggle("open");
}

