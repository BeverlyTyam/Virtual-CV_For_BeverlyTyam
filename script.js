// Beverly Tyam
//Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});