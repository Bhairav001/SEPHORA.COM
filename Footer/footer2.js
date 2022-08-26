import footer from './component/footer.js';

let div = document.getElementById('footer');
div.innerHTML = footer();

let form = document.getElementById('M-form');
form.addEventListener('click', (event) => {
    event.preventDefault();
});