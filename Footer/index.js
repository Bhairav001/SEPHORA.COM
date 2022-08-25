function expand(){
    let res = document.getElementById('M-ul');
    res.style.display = 'block';

    let btn = document.getElementById('M-btn3');
    btn.ariaExpanded = 'true';

    let tar = document.getElementById('icon');
    tar.setAttribute('class', 'fa-solid fa-minus');
    tar.addEventListener('click', () => {
        expand4();
    });
}

function expand4(){
    let div = document.getElementById('M-ul');
    div.style.display = 'none';

    let btn = document.getElementById('M-btn3');
    btn.ariaExpanded = 'false';

    let tar = document.getElementById('icon');
    tar.setAttribute('class', 'fa-solid fa-plus');
    tar.addEventListener('click', () => {
        expand();
    });
}


function expand2(){
    let res = document.getElementById('M-ul1');
    res.style.display = 'block';

    let btn = document.getElementById('M-btn3-1');
    btn.ariaExpanded = 'true';

    let tar = document.getElementById('icon1');
    tar.setAttribute('class', 'fa-solid fa-minus');
    tar.addEventListener('click', () => {
        expand5();
    });
}

function expand5(){
    let div = document.getElementById('M-ul1');
    div.style.display = 'none';

    let btn = document.getElementById('M-btn3-1');
    btn.ariaExpanded = 'false';

    let tar = document.getElementById('icon1');
    tar.setAttribute('class', 'fa-solid fa-plus');
    tar.addEventListener('click', () => {
        expand2();
    });
}


function expand3(){
    let res = document.getElementById('M-ul2');
    res.style.display = 'block';

    let btn = document.getElementById('M-btn3-2');
    btn.ariaExpanded = 'true';

    let tar = document.getElementById('icon2');
    tar.setAttribute('class', 'fa-solid fa-minus');
    tar.addEventListener('click', () => {
        expand6();
    });
}

function expand6(){
    let div = document.getElementById('M-ul2');
    div.style.display = 'none';

    let btn = document.getElementById('M-btn3-2');
    btn.ariaExpanded = 'false';

    let tar = document.getElementById('icon2');
    tar.setAttribute('class', 'fa-solid fa-plus');
    tar.addEventListener('click', () => {
        expand3();
    });
}


let form = document.getElementById('M-form');
form.addEventListener('click', (event) => {
    event.preventDefault();
});

function sub(){
    let res = document.getElementById('M-greet');
    res.style.display = 'block';

    let p = document.getElementById('emailSignUpInput');
    p.addEventListener('click', () => {
        res.style.display = 'none';
        form.reset();
    });
}