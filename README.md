# 🚀 Moe Kyaw Aung - Bootstrap Portfolio

A modern, interactive portfolio website built with Bootstrap 5, featuring 3D animations, beautiful UI, and living modern colors.

## 🌟 Features

### ✨ Design & UI
- **Modern Color Scheme**: Living gradients with purple, pink, and cyan
- **3D Animations**: Three.js particle background animations
- **Smooth Scroll**: GSAP-powered smooth scrolling and animations
- **Responsive Design**: Fully responsive and mobile-friendly
- **Dark Mode**: Eye-friendly dark theme throughout

### 🎨 Sections
1. **Hero Section**
   - Animated profile image with orbit effect
   - Floating card animations
   - Call-to-action buttons
   - Social media links

2. **About Section**
   - Professional bio
   - Key statistics (years, projects, clients)
   - Image with decorative animations

3. **Skills Section**
   - Frontend Technologies
   - Backend Technologies
   - Mobile Development
   - Cloud & DevOps Tools
   - Hover effects and animations

4. **Portfolio Section**
   - Project showcase with images
   - Project overlays on hover
   - Technology tags
   - 6 featured projects

5. **Contact Section**
   - Multiple contact methods
   - Email, phone, location
   - Social media integration
   - Call-to-action buttons

6. **Footer**
   - Copyright information
   - GitHub profile link

### 🎯 Technologies Used

**Frontend:**
- HTML5
- CSS3 (Advanced animations and gradients)
- Bootstrap 5
- JavaScript ES6+

**Animations & Effects:**
- GSAP (GreenSock Animation Platform)
- ScrollTrigger (Scroll-based animations)
- Three.js (3D particle background)
- CSS Keyframe animations

**Icons & Fonts:**
- Font Awesome 6
- Google Fonts (Poppins, Space Mono)

## 📁 Project Structure

```
bootstrap-portfolio/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main styles
│   └── animations.css        # Animation keyframes
├── js/
│   └── main.js               # JavaScript logic
├── assets/
│   └── profile.jpg           # Profile picture (optional)
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Clone or download the project:**
```bash
git clone https://github.com/moekyawaung-cloud/bootstrap-portfolio.git
cd bootstrap-portfolio
```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using Live Server (VS Code)
# Right-click index.html → Open with Live Server
```

3. **Open in browser:**
   - Navigate to `http://localhost:8000`

## ⚙️ Customization

### Change Personal Information
Edit the following in `index.html`:

```html
<!-- Name and title -->
<h1 class="display-4 fw-bold mb-3 text-glow animate-fade-in-up">
    <span class="text-gradient">Your Name</span>
</h1>

<!-- Email -->
<a href="mailto:your-email@example.com">

<!-- GitHub -->
<a href="https://github.com/your-github">
```

### Modify Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Update Profile Picture
Replace the image URL in `index.html`:

```html
<img src="your-image-url" alt="Profile" class="profile-image">
```

### Add New Projects
Duplicate a project card and update the content:

```html
<div class="col-md-6 col-lg-4 mb-4">
    <div class="project-card card-hover">
        <div class="project-image">
            <img src="project-image.jpg" alt="Project">
            <div class="project-overlay">
                <a href="#" class="btn btn-sm btn-light">View Project</a>
            </div>
        </div>
        <div class="project-content">
            <h5 class="text-gradient">Project Name</h5>
            <p class="text-muted">Project description</p>
            <div class="project-tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
    </div>
</div>
```

## 🎨 Color Palette

| Color | HEX | Usage |
|-------|-----|-------|
| Primary Purple | #667eea | Main gradient, accents |
| Secondary Pink | #764ba2 | Secondary gradient |
| Accent Cyan | #4facfe | Tertiary gradient |
| Dark Background | #0a0a0f | Main background |
| Secondary Dark | #1a1a2e | Section backgrounds |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Optimized animations**: Uses GPU-accelerated CSS transforms
- **Lazy loading**: Images load on demand
- **Minimal dependencies**: Only essential libraries included
- **Fast load time**: Lightweight and efficient
- **Smooth 60fps**: Optimized animation performance

## 🔧 Troubleshooting

### 3D Background not showing
- Ensure JavaScript is enabled
- Check browser console for errors
- Try a different browser

### Animations not smooth
- Disable browser extensions
- Clear browser cache
- Try a modern browser

### Images not loading
- Check image URLs
- Use absolute URLs or local paths
- Ensure CORS is properly configured

## 📚 Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [GSAP Documentation](https://greensock.com/gsap/)
- [Three.js Documentation](https://threejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📈 Future Enhancements

- [ ] Add dark/light mode toggle
- [ ] Implement contact form
- [ ] Add blog section
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Performance optimization
- [ ] SEO improvements

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 👤 Author

**Moe Kyaw Aung**
- GitHub: [@moekyawaung-cloud](https://github.com/moekyawaung-cloud)
- Portfolio: [Your Portfolio URL]
- Email: moekyawaung@example.com

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- GSAP for smooth animations
- Three.js for 3D effects
- Font Awesome for icons
- Google Fonts for typography

## 📞 Support

If you have any questions or need help, please:
1. Check the documentation
2. Review the troubleshooting section
3. Open an issue on GitHub
4. Contact me directly

---

Made with ❤️ by Moe Kyaw Aung | © 2024 All Rights Reserved
```

---
