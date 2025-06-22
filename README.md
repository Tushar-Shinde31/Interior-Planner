# 🏡 Interior Planner

A sleek **3D room layout planner** built with React, enabling users to design and visualize interior spaces seamlessly. Hosted on Netlify.

## 🔍 Live Demo

👉 [https://interiorplanner.netlify.app](https://interiorplanner.netlify.app)

---

## ✨ Features

- **3D Room Design**
  - Add, move, resize, and rotate furniture models in a 3D scene  
  - Multiple camera views: top-down, side, perspective  
  - Snap-to-grid layout and object alignment guides

- **Item Management**
  - Select from a library of furniture items  
  - Customize colors, dimensions, and positions  
  - Add or remove items with ease

- **Save & Export**
  - Download room snapshots as images  
  - Save project data to local storage for future editing

- **Responsive UI**
  - Drag-and-drop panel for object selection  
  - Clean 3D viewport with intuitive drag, zoom, and rotate controls

---

## 🛠️ Tech Stack

- **React** (with functional components and hooks)
- **Three.js** or **@react-three/fiber**
- **Tailwind CSS** for styling
- **Netlify** for deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or Yarn

### Installation

```bash
git clone https://github.com/Tushar-Shinde31/Interior-Planner.git
cd Interior-Planner
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

Deploy the contents of the `build/` folder to Netlify, Vercel, or any static hosting platform.

---

## 📁 Project Structure

```
Interior-Planner/
├── public/
├── src/
│   ├── components/       # UI elements like Toolbar, SidePanel
│   ├── scenes/           # 3D layout & objects
│   ├── store/            # State management (Redux/Context)
│   ├── styles/           # Tailwind or custom CSS
│   └── App.js            # Main App component
├── package.json
└── README.md
```

---

## ✅ Contributing

We welcome contributions! Here’s how to get started:

1. Fork the repo  
2. Create a branch (`git checkout -b feat/AmazingFeature`)  
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)  
4. Push to the branch (`git push origin feat/AmazingFeature`)  
5. Open a Pull Request

Please follow existing coding standards and comment your code.

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Credits

- Designed and developed by **[Tushar Shinde](https://github.com/Tushar-Shinde31)**
- Built with ❤️ using React + Three.js
- UI styled with Tailwind CSS

---

**Enjoy Designing Interiors!** 🎨✨
