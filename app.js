var typed = new Typed('.typed-text', {
    strings: ['Joyonto Kumar Das'],
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
    var body = document.body;
    body.classList.toggle("menu-open");
}

// Function to close navbar
function closeNavbar() {
    var body = document.body;
    body.classList.remove("menu-open");
}

// Function to check if we're on mobile
function isMobile() {
    return window.innerWidth <= 768;
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
// function animateSkills() {
//     const progressBars = document.querySelectorAll('.progress');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const progress = entry.target;
//                 const percentage = progress.getAttribute('data-progress');
//                 const percentageDisplay = progress.closest('.skill-item').querySelector('.skill-percentage');
                
//                 // Animate the progress bar
//                 progress.style.setProperty('--progress', `${percentage}%`);
//                 progress.classList.add('animate');
                
//                 // Animate the counter
//                 let startValue = 0;
//                 const duration = 1500; // 1.5 seconds to match progress bar
//                 const increment = percentage / (duration / 16); // 60 FPS
                
//                 const counter = setInterval(() => {
//                     startValue += increment;
//                     if (startValue >= percentage) {
//                         startValue = percentage;
//                         clearInterval(counter);
//                     }
//                     percentageDisplay.textContent = `${Math.round(startValue)}%`;
//                 }, 16);
                
//                 observer.unobserve(progress);
//             }
//         });
//     }, { threshold: 0.5 });

//     progressBars.forEach(bar => {
//         // Reset percentage display to 0%
//         const percentageDisplay = bar.closest('.skill-item').querySelector('.skill-percentage');
//         percentageDisplay.textContent = '0%';
//         observer.observe(bar);
//     });
// }

// About section animations
function initAboutSection() {
    const expandableContent = document.querySelector('.expandable-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const skillsList = document.querySelectorAll('.skills-list li');
    const visionText = document.querySelector('.vision-text');
    const aboutDescription = document.querySelector('.about_description');
    let isExpanded = false;

    // Safeguard: if expected elements aren't present on this page, exit early
    if (!expandableContent || !readMoreBtn || !visionText) {
        return;
    }

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
    // Update copyright year (guard if not present)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 200) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        });
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeDljsIaanLF6O5AC_ddCF3LN7UMyaTc",
  authDomain: "smart-protfolio.firebaseapp.com",
  projectId: "smart-protfolio",
  storageBucket: "smart-protfolio.firebasestorage.app",
  messagingSenderId: "62281235005",
  appId: "1:62281235005:web:5e57f52470bca8ff534854",
  measurementId: "G-6JGNB5H14B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('contact-email').value;
            const topic = document.getElementById('contact-topic').value;
            const message = document.getElementById('contact-message').value;
            
            // Optimistic UI: clear form and show success toast immediately
            contactForm.reset();
            showToast('successfully sent', 'success');
            
            try {
                // Create message object
                const messageObj = {
                    email: email,
                    topic: topic,
                    message: message,
                    date: new Date().toLocaleString(),
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                };
                
                // Send to Firestore
                await db.collection('message').add(messageObj);
                
                // Send an email using EmailJS
                await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                    from_email: email,
                    topic: topic,
                    message: message
                }); // Replace with your EmailJS Service ID and Template ID
                
            } catch (error) {
                console.error('Error sending message:', error);
                // Do not interrupt optimistic success toast
            } finally {
                // No button state to restore; we showed toast immediately
            }
        });
    }
}

// Toast notification
function showToast(message, type = 'success') {
    // Ensure container exists
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 10000;
        `;
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        min-width: 260px;
        max-width: 360px;
        padding: 12px 16px;
        border-radius: 8px;
        color: #0a192f;
        background: ${type === 'success' ? '#64ffda' : '#ff6b6b'};
        border: 1px solid rgba(0,0,0,0.05);
        box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        font-weight: 600;
        letter-spacing: 0.2px;
        transform: translateX(20px);
        opacity: 0;
        transition: transform 0.25s ease, opacity 0.25s ease;
    `;

    // Insert and animate in
    container.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
    });

    // Auto dismiss
    const lifetimeMs = 3500;
    setTimeout(() => {
        toast.style.transform = 'translateX(20px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentElement) toast.parentElement.removeChild(toast);
            // Remove container if empty
            if (container && container.children.length === 0) {
                container.remove();
            }
        }, 250);
    }, lifetimeMs);

    // Click to dismiss immediately
    toast.addEventListener('click', () => {
        toast.style.transform = 'translateX(20px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentElement) toast.parentElement.removeChild(toast);
            if (container && container.children.length === 0) {
                container.remove();
            }
        }, 250);
    });
}

// Error popup function
function showErrorPopup() {
    // Create popup overlay
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: #112240;
        border: 2px solid #ff6b6b;
        border-radius: 10px;
        padding: 2rem;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        animation: slideIn 0.3s ease;
    `;
    
    // Error icon
    const icon = document.createElement('div');
    icon.innerHTML = '✗';
    icon.style.cssText = `
        font-size: 3rem;
        color: #ff6b6b;
        margin-bottom: 1rem;
    `;
    
    // Error message
    const message = document.createElement('h3');
    message.textContent = 'Failed to Send Message';
    message.style.cssText = `
        color: #ff6b6b;
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    `;
    
    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Please try again later or contact me directly.';
    subtitle.style.cssText = `
        color: #8892b0;
        margin: 0 0 1.5rem 0;
        line-height: 1.5;
    `;
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = `
        background: #ff6b6b;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = '#ff5252';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = '#ff6b6b';
    });
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(popup);
    });
    
    // Assemble popup
    popupContent.appendChild(icon);
    popupContent.appendChild(message);
    popupContent.appendChild(subtitle);
    popupContent.appendChild(closeBtn);
    popup.appendChild(popupContent);
    
    // Add to page
    document.body.appendChild(popup);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(popup)) {
            document.body.removeChild(popup);
        }
    }, 5000);
}

// Success popup function
function showSuccessPopup() {
    // Create popup overlay
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: #112240;
        border: 2px solid #64ffda;
        border-radius: 10px;
        padding: 2rem;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        animation: slideIn 0.3s ease;
    `;
    
    // Success icon
    const icon = document.createElement('div');
    icon.innerHTML = '✓';
    icon.style.cssText = `
        font-size: 3rem;
        color: #64ffda;
        margin-bottom: 1rem;
    `;
    
    // Success message
    const message = document.createElement('h3');
    message.textContent = 'Message Sent Successfully!';
    message.style.cssText = `
        color: #64ffda;
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    `;
    
    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Thank you for contacting me. I will get back to you soon!';
    subtitle.style.cssText = `
        color: #8892b0;
        margin: 0 0 1.5rem 0;
        line-height: 1.5;
    `;
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'OK';
    closeBtn.style.cssText = `
        background: linear-gradient(135deg, #64ffda, #0a192f);
        color: #0a192f;
        border: none;
        padding: 0.8rem 2rem;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
    `;
    
    // Button hover effect
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'translateY(-2px)';
        closeBtn.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.3)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'translateY(0)';
        closeBtn.style.boxShadow = 'none';
    });
    
    // Close popup when button is clicked
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(popup);
    });
    
    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Assemble popup
    popupContent.appendChild(icon);
    popupContent.appendChild(message);
    popupContent.appendChild(subtitle);
    popupContent.appendChild(closeBtn);
    popup.appendChild(popupContent);
    
    // Add to page
    document.body.appendChild(popup);
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(popup)) {
            document.body.removeChild(popup);
        }
    }, 5000);
}

// Admin: View and Delete Messages (no auth required)
function initMessageAdmin() {
    const listContainer = document.getElementById('messages-list');
    const loadingEl = document.getElementById('messages-loading');
    const emptyEl = document.getElementById('messages-empty');

    if (!listContainer) return; // Not on admin page

    // Real-time listener for messages
    db.collection('message')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        (snapshot) => {
            // Clear existing items
            listContainer.innerHTML = '';
            if (loadingEl) loadingEl.style.display = 'none';

            if (snapshot.empty) {
                if (emptyEl) emptyEl.style.display = 'block';
                return;
            } else if (emptyEl) {
                emptyEl.style.display = 'none';
            }

            snapshot.forEach((doc) => {
                const data = doc.data();
                const li = document.createElement('li');
                li.className = 'project-item';
                li.innerHTML = `
                    <div class="message-content">
                        <div><strong>${escapeHtml(data.topic || 'No topic')}</strong></div>
                        <div style="color:#8892b0; margin-top:4px;">${escapeHtml(data.message || '')}</div>
                        <div style="color:#8892b0; font-size:12px; margin-top:6px;">
                            From: ${escapeHtml(data.email || 'unknown')} • ${escapeHtml(data.date || '')}
                        </div>
                    </div>
                    <div class="project-actions">
                        <button data-id="${doc.id}" class="delete-message-btn">Delete</button>
                    </div>
                `;
                listContainer.appendChild(li);
            });

            // Attach delete handlers
            listContainer.querySelectorAll('.delete-message-btn').forEach((btn) => {
                btn.addEventListener('click', async (e) => {
                    const id = e.currentTarget.getAttribute('data-id');
                    const confirmDelete = confirm('Delete this message?');
                    if (!confirmDelete) return;
                    try {
                        await db.collection('message').doc(id).delete();
                        showToast('Message deleted', 'success');
                    } catch (err) {
                        console.error('Delete failed', err);
                        showToast('Failed to delete message', 'error');
                    }
                });
            });
        },
        (error) => {
            console.error('Failed to load messages:', error);
            if (loadingEl) loadingEl.textContent = 'Failed to load messages.';
            showToast('Failed to load messages', 'error');
        }
      );
}

// Basic HTML escaping to prevent XSS in admin list
function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // animateSkills();
    initAboutSection();
    initFooter();
    initContactForm();
    initMessageAdmin();
    
    // Get all navbar links
    const navLinks = document.querySelectorAll('#navbar a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close navbar for all navigation links on mobile
            if (isMobile()) {
                closeNavbar();
            }
            
            // Special handling for Home link (scroll to top)
            if (link.getAttribute('href') === '#As_profile') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle window resize to update mobile state
    window.addEventListener('resize', () => {
        // If navbar is open and we resize to desktop, close it
        if (!isMobile() && document.body.classList.contains('menu-open')) {
            closeNavbar();
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMobile() && document.body.classList.contains('menu-open')) {
            const navbar = document.getElementById('navbar');
            const menuToggle = document.querySelector('.menu-toggle');
            
            // If click is outside navbar and not on menu toggle
            if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
                closeNavbar();
            }
        }
    });
});

// Make scrollToTop available globally
window.scrollToTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

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

// Toggle All Projects Function
window.toggleAllProjects = function() {
    const hiddenProjects = document.getElementById('hidden-projects');
    const topToggleBtn = document.querySelector('.view-all-projects .view-all-btn');
    const btnText = topToggleBtn.querySelector('.btn-text');
    const btnIcon = topToggleBtn.querySelector('i');
    
    if (hiddenProjects.style.display === 'none') {
        // Show all projects
        hiddenProjects.style.display = 'block';
        
        // Hide the top button when showing all projects
        topToggleBtn.style.display = 'none';
        
        // Smooth scroll to the new projects
        setTimeout(() => {
            hiddenProjects.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    } else {
        // Hide all projects
        hiddenProjects.style.display = 'none';
        
        // Show the top button again
        topToggleBtn.style.display = 'inline-flex';
        
        // Scroll back to the top button
        setTimeout(() => {
            topToggleBtn.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 100);
    }
};