// Initialize Swiper
var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: true, // Enable touch movement for mobile devices
    grabCursor: true, // Show grab cursor for better UX
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
    speed: 800, // Adjust speed for smoother transitions
});

// Update active link on slide change
swiper.on('slideChange', function () {
    updateActiveLink(swiper.activeIndex);
});

// Function to update active link based on index
function updateActiveLink(index) {
    document.querySelectorAll(".Links li").forEach((link, i) => {
        link.classList.toggle("activeLink", i === index);
    });
}

// Navigation function to switch slides and update active link
function Navigate(index) {
    updateActiveLink(index); // Update the active link style
    swiper.slideTo(index, 1000, true); // Smooth transition to selected slide
}
