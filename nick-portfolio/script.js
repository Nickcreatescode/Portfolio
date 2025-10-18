// Projects Data
const projects = [
    {
        id: 1,
        title: "Rallly - iOS Event App",
        description: "Full-stack app deployed on the appstore which helps student connect with events on campus.",
        image: "images/ralllycover.png",
        tech: ["Swift", "SwiftUI", "Firebase", ,"Firestore", "Xcode"],
        github: "https://github.com/Nickcreatescode",
        demo: "#",
        showGithub: false,
        details: {
            overview: `Rallly is a comprehensive iOS social networking platform designed specifically 
            for UC Santa Cruz students to discover, create, and manage campus events while building meaningful 
            communities. The app bridges the gap between student organizations and individual students by 
            providing a centralized hub where users can explore local events, join interest-based communities, 
            and connect with peers who share similar interests. With real-time updates, location-based discovery, 
            and intelligent notifications, Rallly transforms how students engage with campus life by making 
            it effortless to stay informed about activities, build social connections, and participate in the 
            college community ecosystem.<br><br>
            <strong>Available on the App Store:</strong> <a href="https://apps.apple.com/us/app/rallly/id6752114224" target="_blank" rel="noopener noreferrer">https://apps.apple.com/us/app/rallly/id6752114224</a>`,
            features: [
                "Create Events Instantly: Set up events with a name, location, date, description and more in just a few taps.",
                "Full Friends and Following System: See what events your friends are attending, and get notifications for events being hosted by followed users.",
                "Invite Friends Easily: Send invites to friends or communities directly through the app or with shareable links.",
                "Calendar System: Easily check all the events on certain days using the calendar feature.",
                "Join and RSVP: Respond to invitations and see who's attending in real time.",
                "Join Communities: Browse and join public communities within your campus or local area that share the same interests as you.",
                "Private Event Mode: Keep gatherings small and secure by limiting visibility to invited users only.",
                "Reminders and Notifications: Get alerts for upcoming events or changes to ones you've joined.",
                "User Profiles: Track hosted and joined events on a clean, simple profile page.",
                "Bookmark Events: Bookmark events that catch your interest to join later.",
                "Smart Recommendations: Discover new events based on what your friends are attending."
            ],
            images: [
                "images/rallly0.png",
                "images/rallly1.png",
                "images/rallly2.png", 
                "images/rallly3.png",
                "images/rallly4.png",
                "images/rallly5.png",
                "images/rallly6.png"
            ],
            videoDemo: "Coming soon...",
        }
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "Resume, Portfolio, Project, all in one!",
        image: "images/websitecover.png",
        tech: ["Javascript", "HTML", "CSS"],
        github: "https://github.com/Nickcreatescode",
        demo: "#",
        showGithub: true,
        details: {
            overview: "A clean, modern portfolio website showcasing my projects and skills in an interactive format. Built with vanilla web technologies for optimal performance and easy maintenance.",
            features: [
                "Responsive design for all devices.",
                "Smooth scrolling and animations.",
                "Project showcase with modal popups.",
                "Contact form integration.",
                "Fun and interactive elements.",
                "Fast loading times.",
                "Floating circle at the top of the website that can be grabbed and thrown around the screen."
            ],
            images: ["images/website0.png", "images/website1.png", "images/website2.png", "images/website3.png", "images/website4.png",],
            videoDemo: "You're looking at it!",
        }
    },
    {
        id: 3,
        title: "Machine Learning Dataset Evaluation Project",
        description: `A data analysis project that explores and visualizes a randomly generated dataset to demonstrate 
        core data processing, cleaning, and analytical techniques in Python.`,
        image: "images/datasetcover.png",
        tech: ["Python", "Pandas", "Numpy", "Scikit-Learn", "Regex", "Matplotlib"],
        github: "https://github.com/Nickcreatescode",
        demo: "#",
        details: {
            overview: `This project showcases the complete data analysis workflow using a randomly 
            generated dataset to simulate real-world data challenges. It demonstrates data preprocessing, 
            feature engineering, statistical summarization, and insightful visualization using Python's 
            data science libraries. The project emphasizes structured analysis, reproducibility, and 
            code clarity while producing meaningful visual and statistical insights from synthetic data.`,
            features: [
                "Analyzed a dataset with over 1,300 rows and 13+ unnamed features, identifying correlations between these features and 8 distinct label classes.",
                "Built and compared three supervised classifiers (Logistic Regression, K-Nearest Neighbors, Decision Tree), achieving an average accuracy of 96% across models.",
                "Cleaned and prepared the dataset by handling missing values and splitting into training and testing sets.",
                "Applied Student's t-test to measure statistical significance of performance differences between models.",
                "Visualized label distributions by category and evaluated model predictions to uncover patterns and support interpretation of results.",
                "Wrote a full report to describe and analyze my findings."
            ],
            images: ["images/dataset0.png","images/dataset1.png","images/dataset2.png","images/dataset3.png","images/dataset4.png","images/dataset5.png"],
            videoDemo: "None",
        }
    },
    {
        id: 4,
        title: "Llama Jumping Game",
        description: "Honorable Mention: My first ever try at making a game. Just look at how far we've come.",
        image: "images/llamacover.png",
        tech: ["Python", "Pygame"],
        github: "https://github.com/Nickcreatescode",
        demo: "#",
        details: {
            overview: "My first ever project. It's not pretty, it doesn't work very well, but it has a special place in my heart. This holy relic will forever be represented (at the end) of my portfolio. <br><br>There are two version of this game. One where the player has to jump over the haybails, and another where the player controls a flying llama and has to avoid falling haybails coming from the sky. Creative right? Wrong! The falling haybails was actually an accident that I decided to turn into a second version of the game.",
            features: [
                "Jumping physics in one version, flying physics in the other.",
                "Seamless infinite background scrolling loop.",
                "Cute 2D animations.",
                "Hit detection when the llama comes in contact with a haybail.",
                "Score tracker for competitive fun.",
                "Faster game speed the longer the player stays alive."
            ],
            images: ["images/llama0.png","images/llama1.png","images/llama2.png","images/llama3.png","images/llama4.png",],
            videoDemo: ["videos/llamademo0.mov","videos/llamademo1.mov"],
        }
    }
];

// DOM Elements
const projectsList = document.getElementById('projectsList');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');
const scrollToTopBtn = document.getElementById('scrollToTop');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Project navigation elements
const projectsPrevBtn = document.getElementById('projectsPrev');
const projectsNextBtn = document.getElementById('projectsNext');
let currentProjectIndex = 0;
const projectsPerView = 3;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    initializeAnimations();
    setupEventListeners();
    addMouseTrail();
    addScrollTriggerEffects();
    addInteractiveElements();
    setupProjectNavigation();
    initializeInteractiveCircle();
});



// Render projects in horizontal scroll
function renderProjects() {
    projectsList.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProjectModal(${project.id})">
            <div class="project-image">
                ${project.image.includes('.') ? 
                    `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` : 
                    project.image
                }
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.showGithub !== false ? `
                    <a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i> Code
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Open project modal with detailed information
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const details = project.details;
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
        <h3>Overview</h3>
        <p>${details.overview}</p>
        </div>
        
        <div class="modal-section">
        <h3>Key Features</h3>
        <ul>
        ${details.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        </div>

        <div class="modal-section">
        <h3>Images</h3>
            <div class="modal-images">
                <button class="modal-scroll-button prev" onclick="scrollModalImages(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="modal-images-container" id="modalImagesContainer">
                    ${details.images.map(img => `
                        <div class="modal-image">
                            ${img.includes('.') ? 
                                `<img src="${img}" alt="Project Screenshot">` : 
                                `<div class="emoji-display">${img}</div>`
                            }
                        </div>
                    `).join('')}
                </div>
                <button class="modal-scroll-button next" onclick="scrollModalImages(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        
        <div class="modal-section">
        <h3>Demo</h3>
        ${(() => {
            // Handle videoDemo - can be text string or array of videos
            if (Array.isArray(details.videoDemo)) {
                // videoDemo is an array of video files
                return `
                    <div class="demo-videos">
                        <button class="modal-scroll-button prev" onclick="scrollDemoVideos(-1)">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="demo-videos-container" id="demoVideosContainer">
                            ${details.videoDemo.map(video => `
                                <div class="demo-video">
                                    <video controls preload="metadata">
                                        <source src="${video}" type="video/mp4">
                                        <source src="${video}" type="video/quicktime">
                                        <source src="${video}" type="video/webm">
                                        <source src="${video}" type="video/ogg">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            `).join('')}
                        </div>
                        <button class="modal-scroll-button next" onclick="scrollDemoVideos(1)">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                `;
            } else {
                // videoDemo is a text string
                return `<p>${details.videoDemo}</p>`;
            }
        })()}
        </div>
        
        <div class="modal-links">
        ${project.showGithub !== false ? `
            <a href="${project.github}" target="_blank" class="btn primary">
            <i class="fab fa-github"></i> View Code
            </a>
            ` : ''}
            </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset modal scroll position to top
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    modalBody.scrollTop = 0;
}

// Initialize animations and observers
function initializeAnimations() {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.project-card, .contact-card, .code-block-section, .tech-stack');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });

    // Add glitch effect to the name
    const nameElement = document.querySelector('.hero h1');
    if (nameElement) {
        setInterval(() => {
            nameElement.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
            setTimeout(() => {
                nameElement.style.textShadow = 'none';
            }, 100);
        }, 10000); // Glitch every 10 seconds
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Modal close events
    closeModal.addEventListener('click', closeProjectModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }

        // Hide navbar on scroll down, show on scroll up
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll indicator click functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Close project modal
function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Scroll modal images horizontally
function scrollModalImages(direction) {
    const container = document.getElementById('modalImagesContainer');
    const scrollAmount = 320; // Width of image + gap
    container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Scroll demo videos horizontally
function scrollDemoVideos(direction) {
    const container = document.getElementById('demoVideosContainer');
    const scrollAmount = 420; // Width of video + gap
    container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Add keyboard support for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeProjectModal();
    }
});

// Add CSS for modal content
const modalStyles = `
    .modal-header {
        margin-bottom: 30px;
    }
    
    .modal-header h2 {
        font-size: 2rem;
        margin-bottom: 15px;
        color: #1f2937;
    }
    
    .modal-images {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
        justify-content: center;
    }
    
    .modal-image {
        max-width: 400px;
        max-height: 600px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }
    
    .modal-image video {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 12px;
        object-fit: contain;
    }
    
    .modal-image img {
        width: auto;
        height: auto;
        max-width: auto;
        max-height: auto;
        border-radius: 12px;
        object-fit: contain;
    }
    
    .demo-videos {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .demo-videos-container {
        display: flex;
        gap: 20px;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding: 10px 0;
        flex: 1;
    }
    
    .demo-videos-container::-webkit-scrollbar {
        height: 8px;
    }
    
    .demo-videos-container::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    
    .demo-videos-container::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }
    
    .demo-videos-container::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    
    .demo-video {
        min-width: 400px;
        max-width: 600px;
        border-radius: 12px;
        overflow: hidden;
    }
    
    .demo-video video {
        width: 100%;
        height: auto;
        border-radius: 12px;
        object-fit: contain;
    }
    
    .modal-section {
        margin-bottom: 30px;
    }
    
    .modal-section h3 {
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: #1f2937;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 5px;
    }
    
    .modal-section ul {
        list-style-type: none;
        padding: 0;
    }
    
    .modal-section li {
        padding: 8px 0;
        border-bottom: 1px solid #f3f4f6;
        position: relative;
        padding-left: 20px;
    }
    
    .modal-section li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #2563eb;
        font-weight: bold;
    }
    
    .modal-links {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
    }
    
    @media (max-width: 768px) {
        .modal-images {
            flex-wrap: wrap;
        }
        
        .modal-links {
            flex-direction: column;
        }
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Add enhanced mouse trail effect
function addMouseTrail() {
    const trail = [];
    const maxTrailLength = 15;
    let isMoving = false;
    let moveTimeout;

    document.addEventListener('mousemove', (e) => {
        isMoving = true;
        clearTimeout(moveTimeout);
        
        trail.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });

        if (trail.length > maxTrailLength) {
            trail.shift();
        }

        // Create trail element with improved styling
        const trailElement = document.createElement('div');
        trailElement.style.position = 'fixed';
        trailElement.style.left = (e.clientX - 3) + 'px';
        trailElement.style.top = (e.clientY - 3) + 'px';
        trailElement.style.width = '6px';
        trailElement.style.height = '6px';
        trailElement.style.background = 'radial-gradient(circle, rgba(66, 153, 225, 0.2), rgba(129, 140, 248, 0.1), transparent)';
        trailElement.style.borderRadius = '50%';
        trailElement.style.pointerEvents = 'none';
        trailElement.style.zIndex = '9999';
        trailElement.style.animation = 'trailFade 1.2s ease-out forwards';
        
        document.body.appendChild(trailElement);

        setTimeout(() => {
            if (document.body.contains(trailElement)) {
                document.body.removeChild(trailElement);
            }
        }, 800);
        
        // Set timeout to detect when mouse stops moving
        moveTimeout = setTimeout(() => {
            isMoving = false;
        }, 100);
    });

    // Add enhanced trail animation
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0% { 
                opacity: 0.3; 
                transform: scale(1); 
            }
            50% { 
                opacity: 0.15; 
                transform: scale(0.8); 
            }
            100% { 
                opacity: 0; 
                transform: scale(0.5); 
            }
        }
    `;
    document.head.appendChild(trailStyle);
}

// Add scroll-triggered effects
function addScrollTriggerEffects() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';
                
                // Add special effects based on section
                if (entry.target.classList.contains('projects')) {
                    triggerProjectsAnimation();
                } else if (entry.target.classList.contains('contact')) {
                    triggerContactAnimation();
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.transform = 'scale(0.95)';
        section.style.opacity = '0.8';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        sectionObserver.observe(section);
    });
}

// Trigger special animations for projects section
function triggerProjectsAnimation() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        }, index * 100);
    });
}

// Trigger special animations for contact section  
function triggerContactAnimation() {
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `contactCardPulse 0.6s ease-out ${index * 0.1}s`;
        }, 200);
    });
}

// Add interactive elements
function addInteractiveElements() {
    // Add enhanced tilt effect to project cards (keep existing good physics)
    const projectCards = document.querySelectorAll('.project-card');
    const contactCards = document.querySelectorAll('.contact-card');
    const skillCards = document.querySelectorAll('.skill-category');
    
    // Project cards - keep the existing excellent physics
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            card.style.transition = 'transform 0.1s ease-out';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            card.style.transition = 'transform 0.3s ease-out';
        });
    });
    
    // Contact cards - apply the same responsive physics as project cards
    contactCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Don't apply tilt if hovering over a link
            if (e.target.classList.contains('contact-link') || e.target.closest('.contact-link')) {
                return;
            }
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Same physics as project cards - exact same responsiveness
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Instant response - no transition during movement
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
            card.style.transition = 'none';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            card.style.transition = 'transform 0.3s ease-out'; // Smooth return to original position
        });
        
        // Ensure immediate response on mouse enter
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
        
        // Ensure contact links are clickable by adding higher z-index
        const contactLink = card.querySelector('.contact-link');
        if (contactLink) {
            contactLink.style.position = 'relative';
            contactLink.style.zIndex = '10';
            contactLink.style.pointerEvents = 'auto';
        }
    });

    // Technical expertise cards - same physics as project cards
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) translateY(-8px) scale(1.02)`;
            card.style.transition = 'none';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            card.style.transition = 'transform 0.3s ease-out';
        });
    });

    // Enhanced navbar scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        // Change navbar opacity based on scroll
        const opacity = Math.min(currentScrollY / 200, 0.95);
        navbar.style.background = `rgba(255, 255, 255, ${opacity * 0.1})`;
        
        lastScrollY = currentScrollY;
    });
}


// Setup project navigation
function setupProjectNavigation() {
    if (!projectsPrevBtn || !projectsNextBtn) return;
    
    const scrollContainer = document.querySelector('.projects-scroll-container');
    if (!scrollContainer) return;
    
    let isScrolling = false;
    
    function updateNavigationButtons() {
        const tolerance = 5; // Tolerance for floating point precision
        const isAtStart = scrollContainer.scrollLeft <= tolerance;
        const isAtEnd = scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - tolerance;
        
        projectsPrevBtn.classList.toggle('disabled', isAtStart);
        projectsNextBtn.classList.toggle('disabled', isAtEnd);
    }
    
    function smoothScrollTo(targetScrollLeft) {
        if (isScrolling) return;
        isScrolling = true;
        
        const startScrollLeft = scrollContainer.scrollLeft;
        const distance = targetScrollLeft - startScrollLeft;
        const duration = 400; // milliseconds
        const startTime = performance.now();
        
        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            
            scrollContainer.scrollLeft = startScrollLeft + (distance * easeOutCubic);
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                isScrolling = false;
                updateNavigationButtons();
            }
        }
        
        requestAnimationFrame(animateScroll);
    }
    
    function scrollToNextProject() {
        const cardWidth = 350;
        const gap = 30;
        const scrollAmount = cardWidth + gap;
        const targetScroll = Math.min(
            scrollContainer.scrollLeft + scrollAmount,
            scrollContainer.scrollWidth - scrollContainer.clientWidth
        );
        
        smoothScrollTo(targetScroll);
    }
    
    function scrollToPrevProject() {
        const cardWidth = 350;
        const gap = 30;
        const scrollAmount = cardWidth + gap;
        const targetScroll = Math.max(
            scrollContainer.scrollLeft - scrollAmount,
            0
        );
        
        smoothScrollTo(targetScroll);
    }
    
    // Navigation button events
    projectsPrevBtn.addEventListener('click', scrollToPrevProject);
    projectsNextBtn.addEventListener('click', scrollToNextProject);
    
    // Update button states on scroll - debounced
    let scrollTimeout;
    scrollContainer.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateNavigationButtons, 10);
    });
    
    // Initial state
    updateNavigationButtons();
    
    // Allow vertical scrolling but prevent horizontal scrolling
    scrollContainer.addEventListener('wheel', (e) => {
        // Only prevent horizontal scrolling, allow vertical
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Prevent horizontal touch scrolling but allow vertical
    scrollContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            // Allow single touch for vertical scrolling
            return;
        }
        e.preventDefault();
    }, { passive: false });
    
    // Disable dragging but allow normal mouse interactions
    scrollContainer.style.cursor = 'default';
    scrollContainer.style.userSelect = 'auto';
}




// Add CSS animations for new effects
const newAnimations = document.createElement('style');
newAnimations.textContent = `
    @keyframes contactCardPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
`;
document.head.appendChild(newAnimations);

// Interactive Floating Circle Physics
function initializeInteractiveCircle() {
    const circle = document.querySelector('.profile-accent');
    if (!circle) return;
    
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let animationId = null;
    let lastTime = 0;
    
    // Physics constants
    const friction = 0.98;
    const bounce = 0.7;
    const throwMultiplier = 0.3;
    
    // Get initial position
    const rect = circle.getBoundingClientRect();
    let currentX = rect.left;
    let currentY = rect.top;
    
    // Disable original animation when interacting
    function disableOriginalAnimation() {
        circle.style.animation = 'none';
    }
    
    function enableOriginalAnimation() {
        circle.style.animation = 'accentFloat 6s ease-in-out infinite';
    }
    
    // Mouse events
    circle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    // Touch events for mobile
    circle.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    circle.addEventListener('touchend', handleTouchEnd);
    
    function startDrag(e) {
        isDragging = true;
        disableOriginalAnimation();
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        // Get current position relative to viewport, accounting for any existing transform
        const rect = circle.getBoundingClientRect();
        
        // If circle is already in fixed position (from previous interaction), 
        // get its current transform values
        const computedStyle = window.getComputedStyle(circle);
        const transform = computedStyle.transform;
        
        if (transform && transform !== 'none') {
            // Extract translate values from existing transform
            const matrix = new DOMMatrix(transform);
            currentX = matrix.e; // translateX value
            currentY = matrix.f; // translateY value
        } else {
            // First time grabbing - get position from bounding rect
            currentX = rect.left;
            currentY = rect.top;
        }
        
        dragStartX = clientX - currentX;
        dragStartY = clientY - currentY;
        lastX = clientX;
        lastY = clientY;
        lastTime = performance.now();
        
        // Switch to fixed positioning with enhanced visibility
        circle.style.position = 'fixed';
        circle.style.left = '0px';
        circle.style.top = '0px';
        circle.style.transform = `translate(${currentX}px, ${currentY}px)`;
        circle.style.opacity = '0.3'; // Make more visible during drag
        circle.style.cursor = 'grabbing';
        circle.style.zIndex = '99999'; // Ensure it's above everything
        circle.style.pointerEvents = 'auto';
        
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    }
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const currentTime = performance.now();
        const deltaTime = currentTime - lastTime;
        
        // Calculate velocity for throw physics
        if (deltaTime > 0) {
            velocityX = (clientX - lastX) / deltaTime * 16.67; // Convert to 60fps equivalent
            velocityY = (clientY - lastY) / deltaTime * 16.67;
        }
        
        currentX = clientX - dragStartX;
        currentY = clientY - dragStartY;
        
        // Keep within screen bounds during drag
        const bounds = getScreenBounds();
        currentX = Math.max(0, Math.min(currentX, bounds.width - 120));
        currentY = Math.max(0, Math.min(currentY, bounds.height - 120));
        
        circle.style.transform = `translate(${currentX}px, ${currentY}px)`;
        
        lastX = clientX;
        lastY = clientY;
        lastTime = currentTime;
    }
    
    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        
        circle.style.cursor = 'grab';
        circle.style.zIndex = '99999'; // Keep high z-index even after drag
        circle.style.opacity = '0.2'; // Slightly more visible than original
        
        // Apply throw physics
        velocityX *= throwMultiplier;
        velocityY *= throwMultiplier;
        
        startPhysicsAnimation();
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        startDrag(e);
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        drag(e);
    }
    
    function handleTouchEnd(e) {
        e.preventDefault();
        endDrag();
    }
    
    function getScreenBounds() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    
    function startPhysicsAnimation() {
        function animate() {
            const bounds = getScreenBounds();
            
            // Apply velocity
            currentX += velocityX;
            currentY += velocityY;
            
            // Bounce off edges
            if (currentX <= 0) {
                currentX = 0;
                velocityX = Math.abs(velocityX) * bounce;
            } else if (currentX >= bounds.width - 120) {
                currentX = bounds.width - 120;
                velocityX = -Math.abs(velocityX) * bounce;
            }
            
            if (currentY <= 0) {
                currentY = 0;
                velocityY = Math.abs(velocityY) * bounce;
            } else if (currentY >= bounds.height - 120) {
                currentY = bounds.height - 120;
                velocityY = -Math.abs(velocityY) * bounce;
            }
            
            // Apply friction
            velocityX *= friction;
            velocityY *= friction;
            
            // Update position
            circle.style.transform = `translate(${currentX}px, ${currentY}px)`;
            
            // Continue animation if there's still significant velocity
            if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
                animationId = requestAnimationFrame(animate);
            } else {
                // Stop physics and start custom floating animation
                velocityX = 0;
                velocityY = 0;
                setTimeout(() => {
                    if (!isDragging) {
                        startFloatingAnimation();
                    }
                }, 1000); // Wait 1 second before returning to floating animation
            }
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    function startFloatingAnimation() {
        let floatStartTime = performance.now();
        const baseX = currentX;
        const baseY = currentY;
        
        function floatAnimate(time) {
            if (isDragging) return; // Stop if user starts dragging again
            
            const elapsed = (time - floatStartTime) / 1000; // Convert to seconds
            const cycle = elapsed % 6; // 6-second cycle like original animation
            
            // Calculate floating offset (same as original accentFloat animation)
            let offsetX = 0;
            let offsetY = 0;
            let scale = 1;
            
            if (cycle <= 3) {
                // First half: move to offset position and scale up
                const progress = cycle / 3;
                const easeProgress = 0.5 * (1 - Math.cos(Math.PI * progress));
                offsetX = -10 * easeProgress;
                offsetY = -10 * easeProgress;
                scale = 1 + 0.1 * easeProgress;
            } else {
                // Second half: return to original position and scale
                const progress = (cycle - 3) / 3;
                const easeProgress = 0.5 * (1 - Math.cos(Math.PI * progress));
                offsetX = -10 * (1 - easeProgress);
                offsetY = -10 * (1 - easeProgress);
                scale = 1.1 - 0.1 * easeProgress;
            }
            
            // Apply the floating animation on top of the current position
            circle.style.transform = `translate(${baseX + offsetX}px, ${baseY + offsetY}px) scale(${scale})`;
            
            animationId = requestAnimationFrame(floatAnimate);
        }
        
        animationId = requestAnimationFrame(floatAnimate);
    }
    
    // Make circle grabbable and more visible
    circle.style.cursor = 'grab';
    circle.style.userSelect = 'none';
    circle.style.touchAction = 'none';
    circle.style.opacity = '0.2'; // Make it more visible initially
    circle.style.zIndex = '99999'; // Always stay on top
}

