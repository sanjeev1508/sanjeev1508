# Sanjeevikumar S - Portfolio Website

A modern, professional portfolio website built with React, showcasing AI/ML projects and expertise.

## 🚀 Features

- **React-based Architecture** - Component-based, maintainable code
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dynamic Content** - Easy to update projects and skills
- **Professional Theme** - Modern dark blue/cyan aesthetic
- **Performance Optimized** - Fast loading and smooth scrolling

## 🛠️ Technologies Used

- React 18
- Framer Motion (animations)
- React Icons
- React Intersection Observer
- CSS3 (modern styling)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect React and deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The `build` folder contains static files that can be deployed to:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── my_picture.JPG
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.js` - Name, title, description
- `src/components/About.js` - About section content
- `src/components/Skills.js` - Skills and technologies
- `src/components/Projects.js` - Featured projects

### Change Theme Colors

Edit CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #0891b2;
    --secondary-color: #06b6d4;
    --accent-color: #14b8a6;
    /* ... */
}
```

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Sanjeevikumar S**
- GitHub: [@sanjeev1508](https://github.com/sanjeev1508)
- LinkedIn: [Sanjeevikumar S](https://www.linkedin.com/in/sanjeevikumar-s-737951282)

---

Built with ❤️ using React
