// DOM elements
let thoughtButton = document.getElementById('thought-Button');
let contentP = document.querySelector('.main__content__p');
let contentImg = document.querySelector('.main__content__img');

// Data into DOM
let thought = "new cat thought";
let imgSrc = './assets/img/' + 'hungry' + '.png';

// EventListener click put = modify DOM
thoughtButton.addEventListener("click", e => {
    contentP.innerHTML = thought;
    contentImg.setAttribute('src', imgSrc);
});