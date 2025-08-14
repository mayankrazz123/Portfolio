# Akhil Shrivas - Portfolio Website

A modern, responsive portfolio website showcasing Akhil Shrivas's skills, projects, and experience as a Computer Science & Engineering student.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Interactive Elements**: Hover effects, smooth scrolling, and animations
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project cards with links to live demos and GitHub
- **Skills Visualization**: Animated skill bars with percentages
- **Education Timeline**: Clean timeline showing educational background

## 📁 Project Structure

```
Por/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── por.jpg         # Profile picture
│   ├── about.jpg       # About section image
│   └── placeholder.txt # Placeholder file
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

1. **Hero Section** (Lines 50-60):
   - Name and title
   - Description
   - Profile image

2. **About Section** (Lines 80-120):
   - Personal description
   - Contact details
   - Location information

3. **Skills Section** (Lines 130-200):
   - Add/remove skill categories
   - Update skill percentages
   - Modify skill names

4. **Projects Section** (Lines 210-280):
   - Project titles and descriptions
   - Technology tags
   - Links to live demos and GitHub repositories
   - Project dates

5. **Education Section** (Lines 290-350):
   - Educational background
   - Training and certifications
   - Dates and institutions

6. **Contact Section** (Lines 360-400):
   - Contact information
   - Social media links

### Styling Customization

The website uses CSS custom properties for easy theming. Update the following in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #f093fb;    /* Secondary color */
    --accent-color: #4fd1c7;       /* Accent color */
    --text-primary: #2d3748;       /* Primary text color */
    --bg-primary: #ffffff;         /* Primary background */
    /* ... more variables */
}
```

### Adding New Projects

To add a new project, copy this structure in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/your-project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-demo-link" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="your-github-link" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description here...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-date">Month Year</div>
    </div>
</div>
```

## 🚀 Deployment

### Local Development
1. Clone or download the project files
2. Open `index.html` in a web browser
3. The website will work locally without any server setup

### GitHub Pages
1. Push the code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify/Vercel
1. Connect your GitHub repository to Netlify or Vercel
2. Deploy automatically on push
3. Get a custom domain (optional)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Performance Features

- Optimized images and assets
- Smooth animations with CSS transforms
- Lazy loading for better performance
- Responsive design for all screen sizes
- Minimal JavaScript for fast loading

## 📞 Contact

For any questions or customization help:
- Email: akhilshrivas0@gmail.com
- LinkedIn: [linkedin.com/in/akhilshrivas](https://www.linkedin.com/in/akhilshrivas)
- GitHub: [github.com/akhilshrivas](https://github.com/akhilshrivas)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to replace placeholder images with actual project screenshots and update all links to point to your actual projects and social media profiles.
