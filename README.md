<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=26&pause=1400&color=DC2626&center=true&vCenter=true&width=900&lines=Hariom+-+Cinematic+Video+Editor+Portfolio;Visual+Storytelling+Through+Motion;Dark.+Moody.+Intentional." />
</p>

<h2 align="center">🎬 Cinematic Video Editor Portfolio</h2>

<p align="center">
A high-performance, visually immersive portfolio website crafted for professional video editors, filmmakers, and motion graphics artists.
</p>

<p align="center">
  <img src="public/assets/hariom.png" alt="Project Banner" />
</p>

---

## ✨ Features

- **Cinematic Dark Theme**  
  Deep black surfaces with crimson accents inspired by modern film aesthetics.

- **Smart Video Playback**  
  - Hover autoplay for instant preview of local video assets  
  - Hybrid modal system prioritizing local `.mp4` playback with optional Instagram linking

- **Before / After Color Grading Slider**  
  Interactive comparison for Log vs Graded (Rec.709) footage.

- **Responsive by Design**  
  Optimized layouts for desktop, tablet, and mobile — including refined sticky scroll behavior.

- **Instagram-Aware Embeds**  
  Custom handling to preserve dark-theme consistency across embedded content.

- **Performance First**  
  Built using Vite for fast load times and smooth transitions.

---

## 🛠️ Tech Stack

- **Framework**: React (v18)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix Primitives)
- **Icons**: Lucide React
- **Animations**: Tailwind Animate + Custom CSS Keyframes

---

## 🚀 Getting Started

This project supports **Bun (recommended)** or **Node.js**.

### Prerequisites
- Node.js v18+
- Bun (optional — `bun.lockb` included)

### Installation

```bash
git clone https://github.com/editnome07/hariomprasad.git
cd hariomprasad
````

```bash
# Using Bun (Recommended)
bun install

# OR using npm
npm install
```

```bash
# Start the dev server
bun dev
# OR
npm run dev
```

Open your browser and visit:
`http://localhost:8080`

---

## 📂 Project Structure

```
Hariom Portfolio/
├── public/
│   └── assets/              # Images, videos, thumbnails
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Shadcn UI primitives
│   │   ├── VideoModal.tsx   # Video playback logic
│   │   └── BeforeAfter.tsx  # Color grading slider
│   ├── pages/               # Main routes (Home, About, Portfolio)
│   ├── lib/                 # Utility helpers
│   ├── App.tsx              # Router setup
│   └── index.css            # Global styles
└── tailwind.config.ts       # Design system config
```

---

## ⚙️ Customization Guide

### Adding New Projects

Navigate to `src/pages/Index.tsx` or `src/pages/Portfolio.tsx` and extend the `projects` array:

```ts
{
  id: 6,
  title: "New Project Title",
  category: "Commercial",
  thumbnail: "/assets/thumbnails/new_thumb.jpg",
  videoUrl: "/assets/videos/new_video.mp4",
  embedCode: `<blockquote>...</blockquote>`,
  description: "Project description here",
  roles: ["Editor", "Sound Design"],
  bgClass: "bg-branding-neon"
}
```

### Updating Assets

Place optimized `.mp4` videos and images inside `public/assets/`.

---

## 👥 Credits

### **Owner / Creative Director**

**Hariom**
Professional Video Editor & Motion Graphics Artist

* Instagram: [@editnome07](https://www.instagram.com/editnome07/)
* Email: [editnomecreates07@outlook.com](mailto:editnomecreates07@outlook.com)

### **Developer / Designer**

**Kr Satyam**
Cybersecurity Enthusiast & Part-Time Web Developer

* Instagram: [@kaizenbreach](https://www.instagram.com/kaizenbreach/)
* GitHub: [github.com/krsatyam1607](https://github.com/krsatyam1607)

---

## 📄 License

This project is open-source and available under the **MIT License**.
