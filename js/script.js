let links = document.querySelectorAll('.sub-menu a');
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(item => {
            item.parentElement.classList.remove('active');
        });
        this.parentElement.classList.add('active');
    })
});

setTimeout(() => {
    document.querySelector('.infrastructure-svg').classList.add('draw');
}, 2000);

document.querySelector('.solutions-link a').addEventListener('click', function () {
    document.querySelector('.solutions-svg').classList.add('draw');
});

document.querySelector('.work-with-link a').addEventListener('click', function () {
    document.querySelector('.work-with-svg').classList.add('draw');
});
