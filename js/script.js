let links = document.querySelectorAll('.sub-menu a');
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(item => {
            item.parentElement.classList.remove('active');
        });
        this.parentElement.classList.add('active');
    })
});
