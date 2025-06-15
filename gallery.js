const images = [
    'assets/gallery/1.png',
    'assets/gallery/2.png',
    'assets/gallery/3.png'
]

const galleryImage = document.getElementById('gallery-image');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;

function updateImage() {
    galleryImage.src = images[currentIndex];
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
    
    updateImage();
});

previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});