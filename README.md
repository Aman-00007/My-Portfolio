# 🚀 Aman Rawat | Personal Portfolio

A sleek, modern, and highly interactive personal portfolio website showcasing my skills, projects, and professional journey as a Software Developer. Built with a focus on premium aesthetics, 3D fluid interactions, and high performance.

## ✨ Features

- **Immersive 3D Fluid Background**: Custom GLSL WebGL shaders built with Three.js and React Three Fiber that react to mouse movements and page scrolling.
- **Modern Glassmorphism UI**: Beautiful semi-transparent layouts with Tailwind CSS, ensuring readability and a state-of-the-art feel.
- **Dark Theme Exclusive**: Polished high-contrast dark mode out of the box.
- **Dynamic Animations**: Smooth scroll-reveals and staggered item entrances powered by Framer Motion.
- **Serverless Contact Form**: Direct email integration without a backend using FormSubmit.
- **Responsive Design**: Flawless layout across desktops, tablets, and mobile devices (with optimized touch-friendly fallbacks).
- **Dockerized**: Fully production-ready with a multi-stage `Dockerfile` and custom Nginx configuration.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS v4
- **3D & Animation**: Three.js, React Three Fiber, React Three Drei, Framer Motion
- **Icons & Typography**: Lucide React
- **Deployment & Ops**: Docker, Nginx (Configuration included)

## 🏃‍♂️ Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aman-00007/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`.

## 🐳 Running with Docker

1. **Build the Docker Image:**
   ```bash
   docker build -t aman-portfolio .
   ```

2. **Run the Container:**
   ```bash
   docker run -p 8080:80 aman-portfolio
   ```

3. Visit `http://localhost:8080`.

## 📬 Contact
- **Email**: itzamanrawat123@gmail.com
- **LinkedIn**: [Aman Rawat](https://www.linkedin.com/in/aman-rawat-a94380324/)
- **GitHub**: [@Aman-00007](https://github.com/Aman-00007)
