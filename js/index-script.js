document.addEventListener('DOMContentLoaded', function() {
    const backgroundImage = document.querySelector('.bgimg');
    const imagePaths = ['./images/slideshow/afro-woman-cleaning-window-with-rag-home.jpg', './images/slideshow/afro-woman-holding-bucket-with-cleaning-items.jpg', './images/slideshow/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg']
    let currentImageIndex = 0;
    let transitioning = false; // To prevent multiple transitions
    
    function fadeInOut() {
        if (transitioning) return;
        transitioning = true;

        backgroundImage.style.transition = 'opacity 1.5s'; // Extend opacity transition time
        backgroundImage.style.opacity = 0;
        
        setTimeout(() => {
            changeBackgroundImage();
            backgroundImage.style.transition = 'opacity 1.5s'; // Extend opacity transition time
            backgroundImage.style.opacity = 1;
            transitioning = false;
        }, 1500); // Wait for fade out to complete
    }
    
    function changeBackgroundImage() {
        backgroundImage.style.transition = 'none';
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        backgroundImage.style.backgroundImage = `url('${imagePaths[currentImageIndex]}')`;

        setTimeout(() => {
            fadeInOut(); // Trigger fade in after 3 seconds
        }, 3000); // Wait for 3 seconds
    }
    
    // Initial background image
    backgroundImage.style.backgroundImage = `url('${imagePaths[currentImageIndex]}')`;
    backgroundImage.style.opacity = 1;
    
    // Start the sequence
    setTimeout(() => {
        fadeInOut(); // Start with fade in after 3 seconds
    }, 3000); // Wait for 3 seconds
});
