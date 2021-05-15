console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded,", function() => {
    fetchImages();
})

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4" )
    .then(response => response.json())
    .then(json => renderImage(json))
}

function renderImages(images) {
    const main = document.querySelector('main');
    images.forEach(image => {
        main.appendChild(image)
    });
}