# Amit Karthikeyan - Portfolio

A modern, animated portfolio website built with React, Vite, and GSAP showcasing my work as a Computer Science student at UC Santa Barbara.

## 🎨 Features

- **Smooth Animations**: Page load animations and scroll-triggered effects using GSAP
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Modern UI**: Clean design with Carolina Blue (#4B9CD3) and Black color scheme
- **Interactive Elements**: Hover effects, smooth scrolling, and animated navigation
- **Section Highlights**: 
  - Hero section with social links
  - Professional Experience timeline
  - Projects showcase
  - Skills with progress bars
  - Contact form

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** (GreenSock Animation Platform) - Animation library
- **React Responsive** - Responsive utilities

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

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
npm run dev
```

4. Open [http://localhost:5174](http://localhost:5174) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation bar with active section tracking
├── sections/
│   ├── HeroSection.jsx     # Landing section with intro
│   ├── ExperienceSection.jsx  # Professional experience timeline
│   ├── ProjectsSection.jsx    # Project showcase
│   ├── SkillsSection.jsx      # Skills with progress bars
│   └── ContactSection.jsx     # Contact form
├── constants/
│   └── index.js            # Constants and data
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles and Tailwind config
```

## 🎨 Color Scheme

- **Primary (Black)**: `#000000`
- **Secondary (Carolina Blue)**: `#4B9CD3`
- **Background (Off-White)**: `#FAF9F6`
- **Accent (White)**: `#ffffff`

## 📝 Customization

### Update Personal Information

Edit the content in:
- `src/sections/HeroSection.jsx` - Name, title, and bio
- `src/sections/ExperienceSection.jsx` - Work experience data
- `src/sections/ProjectsSection.jsx` - Project information
- `src/sections/SkillsSection.jsx` - Skills and proficiency levels

### Add Your Resume

Place your resume PDF in the `public` folder as `Amit_Karthikeyan_Resume.pdf` or update the link in `HeroSection.jsx`

### Update Social Links

Update GitHub and LinkedIn URLs in `src/sections/HeroSection.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Amit Karthikeyan
- GitHub: [@AmitKarthikeyan](https://github.com/AmitKarthikeyan)
- LinkedIn: [amit-karthikeyan](https://linkedin.com/in/amit-karthikeyan)
