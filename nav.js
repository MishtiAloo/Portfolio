function showSlider () {
    document.querySelector('.slider-window').style.visibility = 'visible';
    document.querySelector('.slider-window').classList.remove('disanimate');
    document.querySelector('.slider-window').classList.add('animate');
}

function hideSlider () {
    document.querySelector('.slider-window').classList.remove('animate');
    document.querySelector('.slider-window').classList.add('disanimate');
}

function sliderClicked(event) {
    event.stopPropagation();
}