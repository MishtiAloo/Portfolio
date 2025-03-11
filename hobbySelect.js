const innerReel = document.querySelector('.inner-reel');

innerReel.addEventListener('click', function(event) {
    const clickedHole = event.target.closest('.holes');
    
    if (clickedHole) {
        document.querySelector('.fa-video').style.opacity = '0';
        document.querySelector('.reel').style.transform = 'translateX(900px) rotate(960deg)';
        document.querySelector('.reel').style.opacity = '0';

        //To move the disk out of vision as well to keep the space occupied inside div
        setTimeout(() => {
            const reel = document.querySelector('.reel');
            reel.style.transform = 'translateX(-900px) rotate(0deg)';
            document.querySelector('.fa-video').style.display = 'none';

            document.querySelector('.slide-wrapper').style.display = 'block';
            
        }, 3000);

        // Get all the .holes elements
        const holes = document.querySelectorAll('.holes');
        
        // Find the index of the clicked hole
        const index = Array.from(holes).indexOf(clickedHole);
        
        // Show the index of the clicked hole in an alert
        // alert('Clicked hole index: ' + index);


    }
});



const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;
const intervalTime = 3000; // 3 seconds

// Function to automatically scroll to the next image
function autoSlide() {
    currentIndex++;

    // If the current index exceeds the number of images, reset to the first image
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Scroll to the next image
    slider.scrollTo({
        left: slider.offsetWidth * currentIndex,
        behavior: 'smooth'
    });
}

// Start the automatic slider
let slideInterval = setInterval(autoSlide, intervalTime);

// Allow user to scroll manually, and reset the interval when they scroll
slider.addEventListener('scroll', () => {
    // Clear the previous interval
    clearInterval(slideInterval);

    // Reset the interval to continue the automatic sliding
    slideInterval = setInterval(autoSlide, intervalTime);
});

