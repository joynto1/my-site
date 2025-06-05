var typed = new Typed('.typed-text', {
    strings: ['Coder', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
    backDelay: 1000,
    startDelay: 500
  });

////////////sidebar/////////////////
function sidebar(){
    var navbar = document.getElementById("navbar");
    var body = document.body;
    
    navbar.classList.toggle("show");
    body.classList.toggle("menu-open");
}

// Function to close navbar
function closeNavbar() {
    var navbar = document.getElementById("navbar");
    var body = document.body;
    
    navbar.classList.remove("show");
    body.classList.remove("menu-open");
}

////////////
// 
////  Scroll Revel Effect //////////////////

// ScrollReveal({
//   reset:true,
//   distance:"100px",
//   duration:2500,
//   delay:300
// }).reveal('#front_skills',{delay:500,origin:"bottom"});

// ScrollReveal({
//   reset:true,
//   distance:"100px",
//   duration:2500,
//   delay:300
// }).reveal('#projects',{delay:2000,origin:"bottom"});

// //////////////opore skills ///


// ScrollReveal({
//   reset:true,
//   distance:"100px",
//   duration:2500,
//   delay:300
// }).reveal('.about_me',{delay:500,origin:"bottom"});

// ScrollReveal({
//   reset:true,
//   distance:"-100px",
//   duration:2500,
//   delay:300
// }).reveal('form',{delay:500,origin:"top"});

// ScrollReveal({
//   reset:true,
//   distance:"100px",
//   duration:2500,
//   delay:300
// }).reveal('.profile',{delay:500,origin:"top"});


// // 

// Skills Animation with Counter
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const percentage = progress.getAttribute('data-progress');
                const percentageDisplay = progress.closest('.skill-item').querySelector('.skill-percentage');
                
                // Animate the progress bar
                progress.style.setProperty('--progress', `${percentage}%`);
                progress.classList.add('animate');
                
                // Animate the counter
                let startValue = 0;
                const duration = 1500; // 1.5 seconds to match progress bar
                const increment = percentage / (duration / 16); // 60 FPS
                
                const counter = setInterval(() => {
                    startValue += increment;
                    if (startValue >= percentage) {
                        startValue = percentage;
                        clearInterval(counter);
                    }
                    percentageDisplay.textContent = `${Math.round(startValue)}%`;
                }, 16);
                
                observer.unobserve(progress);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        // Reset percentage display to 0%
        const percentageDisplay = bar.closest('.skill-item').querySelector('.skill-percentage');
        percentageDisplay.textContent = '0%';
        observer.observe(bar);
    });
}

// About section animations
function initAboutSection() {
    const expandableContent = document.querySelector('.expandable-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const skillsList = document.querySelectorAll('.skills-list li');
    const visionText = document.querySelector('.vision-text');
    const aboutDescription = document.querySelector('.about_description');
    let isExpanded = false;

    // Check if content needs "Read More" button
    function checkContentHeight() {
        const mainContent = document.querySelector('.main_text');
        const expandableContentHeight = expandableContent.scrollHeight;
        const totalContentHeight = mainContent.scrollHeight + expandableContentHeight;

        // If content is less than threshold (e.g., 300px), hide the button
        if (totalContentHeight <= 300) {
            readMoreBtn.style.display = 'none';
            expandableContent.style.maxHeight = 'none';
            expandableContent.classList.add('expanded');
        } else {
            readMoreBtn.style.display = 'flex';
            expandableContent.style.maxHeight = '0';
            expandableContent.classList.remove('expanded');
        }
    }

    function toggleContent() {
        isExpanded = !isExpanded;
        expandableContent.classList.toggle('expanded');
        readMoreBtn.classList.toggle('expanded');
        
        const btnText = readMoreBtn.querySelector('.btn-text');
        btnText.textContent = isExpanded ? 'Read Less' : 'Read More';

        if (isExpanded) {
            expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
            // Animate skills list items
            skillsList.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 100);
            });

            // Animate vision text
            setTimeout(() => {
                visionText.classList.add('animate');
            }, skillsList.length * 100);
        } else {
            expandableContent.style.maxHeight = '0';
            // Reset animations
            skillsList.forEach(item => item.classList.remove('animate'));
            visionText.classList.remove('animate');
        }
    }

    // Attach click handler
    readMoreBtn.addEventListener('click', toggleContent);

    // Check content height after images and fonts are loaded
    window.addEventListener('load', checkContentHeight);

    // Recheck on window resize
    window.addEventListener('resize', checkContentHeight);

    // Intersection Observer for initial animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe about section elements
    document.querySelectorAll('.about_greeting, .main_text, .image-wrapper').forEach(el => {
        observer.observe(el);
    });
}

// Footer functionality
function initFooter() {
    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();

    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
    initAboutSection();
    initFooter();
    
    // Get all navbar links
    const navLinks = document.querySelectorAll('#navbar a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNavbar();
        });
    });
});

// Make scrollToTop available globally
window.scrollToTop = scrollToTop;

// Make toggleContent available globally
window.toggleContent = function() {
    const expandableContent = document.querySelector('.expandable-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const skillsList = document.querySelectorAll('.skills-list li');
    const visionText = document.querySelector('.vision-text');
    let isExpanded = expandableContent.classList.contains('expanded');

    isExpanded = !isExpanded;
    expandableContent.classList.toggle('expanded');
    readMoreBtn.classList.toggle('expanded');
    
    const btnText = readMoreBtn.querySelector('.btn-text');
    btnText.textContent = isExpanded ? 'Read Less' : 'Read More';

    if (isExpanded) {
        expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
        skillsList.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });

        setTimeout(() => {
            visionText.classList.add('animate');
        }, skillsList.length * 100);
    } else {
        expandableContent.style.maxHeight = '0';
        skillsList.forEach(item => item.classList.remove('animate'));
        visionText.classList.remove('animate');
    }
};

 