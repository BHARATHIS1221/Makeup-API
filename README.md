# Makeup API

🎨 **A comprehensive makeup product database API built with React and Vite**

**Live Demo:** [incosmetics.netlify.app](https://incosmetics.netlify.app/)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Makeup API is a modern web application that provides access to an extensive database of makeup products. It leverages React with Vite for fast development and production builds, offering users a seamless experience in browsing and discovering makeup products.

---

## ✨ Features

- 🔍 **Product Search & Filter** - Easily search and filter makeup products
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Optimized with Vite for rapid load times
- 🎨 **Modern UI** - Clean and intuitive user interface
- 📦 **Comprehensive Database** - Access to a wide range of makeup products
- 🔄 **Real-time Updates** - HMR (Hot Module Replacement) for instant development feedback

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Styling:** CSS3 / [Your CSS framework if applicable]
- **State Management:** [React Context/Redux if used]
- **API:** Makeup Database API
- **Deployment:** Netlify

---

## 📥 Installation

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/BHARATHIS1221/Makeup-API.git
   cd Makeup-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

---

## 🚀 Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
Makeup-API/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

---

## 📚 API Documentation

This project uses the [Makeup API](http://makeup-api.herokuapp.com/) to fetch product data.

### Example API Calls

**Get all makeup products:**
```javascript
fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Get products by type:**
```javascript
fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 💡 Usage Examples

### Searching for Products

```javascript
const searchProducts = async (query) => {
  const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`);
  const products = await response.json();
  return products;
};
```

### Displaying Products

```jsx
import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.product_type}</p>
          <img src={product.image_link} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork** the repository
2. **Create** a new feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Guidelines
- Follow ESLint rules configured in the project
- Write clear, descriptive commit messages
- Test your changes before submitting a PR
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Support

For issues, questions, or suggestions, please:
- Open an [Issue](https://github.com/BHARATHIS1221/Makeup-API/issues)
- Check existing [Discussions](https://github.com/BHARATHIS1221/Makeup-API/discussions)

---

## 🙌 Acknowledgments

- [Makeup API](http://makeup-api.herokuapp.com/) - Data source
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI framework
- [Netlify](https://www.netlify.com/) - Hosting platform

---

**Made with ❤️ by [BHARATHIS1221](https://github.com/BHARATHIS1221)**
