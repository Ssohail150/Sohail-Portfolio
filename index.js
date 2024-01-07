document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('active');
    });
  });
  


 /// Text to display
const text = "Hi, I am Front-End Developer";

let charIndex = 0;

function type() {
    const typingText = document.querySelector('.typing-text');

    if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
    }

    const speed = 200; // Speed of typing
    setTimeout(type, speed);
}

// Call the typing function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 1000); // Initial delay before typing starts
});
