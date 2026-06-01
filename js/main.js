// Initialize Three.js Background
function initThreeJS() {
    const container = document.getElementById('three-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 2000;
        positions[i + 1] = (Math.random() - 0.5) * 2000;
        positions[i + 2] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x667eea,
        size: 10,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 500;

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize GSAP animations
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero content animations
    gsap.from('.hero-content h1', {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.2
    });

    gsap.from('.hero-content .lead', {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.4
    });

    gsap.from('.hero-content > p', {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.6
    });

    // Scroll animations
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                markers: false
            },
            duration: 0.8,
            opacity: 0,
            y: 50,
            delay: index * 0.1
        });
    });

    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                markers: false
            },
            duration: 0.8,
            opacity: 0,
            y: 50,
            delay: index * 0.1
        });
    });

    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            duration: 0.8,
            opacity: 0,
            x: -50
        });
    });
}

// Smooth scroll
function smoothScroll() {
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
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initGSAPAnimations();
    smoothScroll();
});

// Add scroll indicator animation
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.querySelector('.scroll-indicator').style.opacity = '0';
    } else {
        document.querySelector('.scroll-indicator').style.opacity = '1';
    }
}
