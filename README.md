# Sara Howari - UI/UX Designer Portfolio

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Tailwind CSS. This portfolio showcases the work and skills of Sara Howari, a UI/UX designer.

## 👨‍💻 Developer

**Developed with ❤️ by [Dev Sahadat](https://github.com/devwithsahadat)**

- **Full Stack Developer**
- **Specialized in:** Modern Web Development, UI/UX Design, Responsive Design
- **Contact:** [GitHub](https://github.com/devwithsahadat) | [LinkedIn](https://www.linkedin.com/in/devwithsahadat/) | [Email](mailto:fiverrprince34@gmail.com)

## 🎨 Features

- **Modern Design**: Dark theme with purple and pink gradients
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Service Carousel**: Interactive service showcase with pagination
- **Project Gallery**: Showcase of design projects with tags
- **Social Media Integration**: Links to professional social media profiles

## 📁 File Structure

```
ProtfolioYt/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality
├── profile.jpeg        # Profile image for hero section
├── about.jpeg          # About section profile image
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Download the files**: All files should be in the same directory
2. **Add your images**: 
   - Place `profile.jpeg` in the root directory for the hero section
   - Place `about.jpeg` in the root directory for the about section
3. **Open the website**: Double-click `index.html` or open it in your browser

### Running Locally

You can run this website locally using any of these methods:

#### Method 1: Direct File Opening
```bash
# Simply double-click index.html or drag it into your browser
```

#### Method 2: Using Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Method 3: Using Node.js (if installed)
```bash
# Install a simple HTTP server
npm install -g http-server

# Run the server
http-server
```
Then open `http://localhost:8080` in your browser.

## 🎯 Customization

### Personal Information

Edit the following sections in `index.html`:

1. **Name and Title**: Update the hero section
```html
<h1 class="text-4xl lg:text-6xl font-bold text-white">
    Hi, I'm <span class="text-purple-400">Your Name</span>
</h1>
<h2 class="text-3xl lg:text-5xl font-bold text-purple-400">Your Title</h2>
```

2. **About Section**: Update the description
```html
<p class="text-gray-300 leading-relaxed">
    Your personal description here...
</p>
```

3. **Contact Information**: Update email and phone
```html
<p class="text-gray-300">your.email@example.com</p>
<p class="text-gray-300">+1 (555) 123-4567</p>
```

### Images

1. **Profile Image**: Replace `profile.jpeg` with your own image
2. **About Image**: Replace `about.jpeg` with your own image
3. **Project Images**: Add project screenshots to the projects section

### Colors and Styling

The website uses a purple and pink color scheme. You can customize colors in `styles.css`:

```css
/* Main gradient colors */
body {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
}

/* Purple accent color */
.purple-accent {
    color: #9333ea;
}
```

### Services and Projects

Update the services and projects sections in `index.html`:

1. **Services**: Modify the service cards with your offerings
2. **Projects**: Add your own projects with descriptions and images
3. **Skills**: Update the skills section with your expertise

## 📱 Responsive Design

The website is fully responsive and includes:

- **Mobile Navigation**: Hamburger menu for mobile devices
- **Flexible Grid**: Adapts to different screen sizes
- **Touch-Friendly**: Optimized for touch interactions
- **Readable Text**: Appropriate font sizes for all devices

## 🎨 Design Features

### Animations
- **Floating Elements**: 3D shapes that float around the avatar
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Loading Animations**: Smooth transitions and loading states

### Visual Effects
- **Glass Morphism**: Translucent navigation bar with blur effect
- **Gradient Backgrounds**: Beautiful purple to pink gradients
- **Glow Effects**: Subtle glowing borders and shadows
- **Star Background**: Animated starry background effect

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Optimized Images**: Proper image sizing and formats
- **Minimal Dependencies**: Only essential external libraries
- **Smooth Scrolling**: Native smooth scroll behavior
- **Debounced Events**: Performance-optimized scroll handling

## 📧 Contact Form

The contact form includes:
- **Form Validation**: Client-side validation for all fields
- **Email Validation**: Proper email format checking
- **Success/Error Messages**: User feedback notifications
- **Responsive Design**: Works on all device sizes

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Create a Netlify account
2. Drag and drop your project folder
3. Your site will be deployed automatically
4. Custom domain can be added in settings

### Vercel
1. Create a Vercel account
2. Import your GitHub repository
3. Deploy automatically
4. Custom domain available

## 🐛 Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Ensure image files are in the correct directory
   - Check file names match exactly (case-sensitive)
   - Verify image formats are supported (.jpg, .jpeg, .png, .webp)

2. **Styles Not Loading**
   - Check internet connection (Tailwind CSS is loaded from CDN)
   - Verify `styles.css` is in the same directory as `index.html`

3. **JavaScript Not Working**
   - Check browser console for errors
   - Ensure `script.js` is in the same directory as `index.html`

### Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: Better compression for web images
3. **Minimize External Requests**: Consider self-hosting Tailwind CSS
4. **Enable Caching**: Configure server caching for better performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📞 Support

If you need help with this portfolio website:
1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Open an issue on GitHub if applicable

---

## 👨‍💻 About the Developer

### Dev Sahadat
**Full Stack Developer & UI/UX Designer**

A passionate developer who specializes in creating modern, responsive web applications with beautiful user interfaces and seamless user experiences.

#### Skills & Expertise:
- **Frontend:** HTML5, CSS3, JavaScript, React, Vue.js, Tailwind CSS
- **Backend:** Node.js, Python, PHP, MySQL, MongoDB
- **Design:** UI/UX Design, Figma, Adobe XD, Responsive Design
- **Tools:** Git, VS Code, Webpack, Docker

#### Services Offered:
- 🚀 **Fast Development** - Quick and efficient web development solutions
- 📱 **Responsive Design** - Perfect on all devices and screen sizes  
- 🛡️ **Quality Code** - Clean, maintainable, and optimized code
- 🎨 **UI/UX Design** - Beautiful and intuitive user interfaces

#### Get in Touch:
- **GitHub:** [@devwithsahadat](https://github.com/devwithsahadat)
- **LinkedIn:** [Dev Sahadat](https://www.linkedin.com/in/devwithsahadat/)
- **Email:** fiverrprince34@gmail.com
- **Portfolio:** [developersahadat.vercel.app](https://developersahadat.vercel.app/)

---

**Created with ❤️ by Dev Sahadat for showcasing creative work and professional skills.**
