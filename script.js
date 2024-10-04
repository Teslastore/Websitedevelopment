// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color when the button is clicked
const bgButton = document.getElementById('changeBgColor');
bgButton.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Toggle content visibility
const toggleButton = document.getElementById('toggleContent');
const content = document.querySelectorAll('h1, h2, h3, b, p');

toggleButton.addEventListener('click', function() {
    content.forEach(function(element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});
// Rotate the heading when the button is clicked
const rotateButton = document.getElementById('rotateHeading');
const heading = document.querySelector('h1');

rotateButton.addEventListener('click', function() {
    heading.style.transition = 'transform 1s'; // Adds smooth transition
    heading.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        heading.style.transform = 'rotate(0deg)'; // Reset the rotation
    }, 1000);
});

// Animate text content to slide in from the left
const animateButton = document.getElementById('animateText');
const textContent = document.querySelectorAll('h2, h3, b, p');

animateButton.addEventListener('click', function() {
    textContent.forEach(function(element) {
        element.style.position = 'relative';
        element.style.opacity = 0;  // Initially hide the text
        element.style.transition = 'left 1s, opacity 1s'; // Smooth animation
        element.style.left = '-100%';  // Move it off screen

        setTimeout(() => {
            element.style.left = '0'; // Slide in
            element.style.opacity = 1; // Fade in
        }, 100); // Delay for effect
    });
});