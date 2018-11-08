let links = document.querySelectorAll('.sub-menu a');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function () {
        for(let j = 0; j < links.length; j++){
            links[j].parentElement.classList.remove('active');
        }
        this.parentElement.classList.add('active');
    })
}

setTimeout(function() {
    document.querySelector('.infrastructure-svg').className.baseVal += ' draw';
}, 2000);

window.onscroll = function() {
    if(window.pageYOffset + document.body.clientHeight > 800) {
        document.querySelector('.solutions-svg').className.baseVal += ' draw';
    }
    if(window.pageYOffset + document.body.clientHeight > 1600) {
        document.querySelector('.work-with-svg').className.baseVal += ' draw';
    }
};

document.querySelector('.solutions-link a').addEventListener('click', function () {
    document.querySelector('.solutions-svg').className.baseVal += ' draw';
});

document.querySelector('.work-with-link a').addEventListener('click', function () {
    document.querySelector('.work-with-svg').className.baseVal += ' draw';
});
