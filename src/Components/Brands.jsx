import React from "react";
import { Link } from "react-router-dom";

// Import Images
import banner from "../assets/banner.jpeg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";

const brands = [
  {
    img: banner,
    text: "New SPF 50 Safe For Sensitive Skin",
  },
  {
    img: img1,
    text: "Get a Beauty Blender & Gloss",
  },
  {
    img: img2,
    text: "#1 Hydration Duo",
  },
  {
    img: img3,
    text: "New Collection. New Rules",
  },
  {
    img: img4,
    text: "Flat 15% Off on Your 1st Order",
  },
  {
    img: img5,
    text: "Up to 40% Off",
  },
  {
    img: img6,
    text: "Glow Routine Flawless Look",
  },
  {
    img: img7,
    text: "Bestseller Gifts on Orders",
  },
  {
    img: img8,
    text: "Scents That Embody Luxury",
  },
  {
    img: img9,
    text: "Get the Dior Glow",
  },
  {
    img: img10,
    text: "Purified Peptides",
  },
];

const Brands = () => {
  return (
    <div className="brands-container">
      {/* Banner */}
      <img
        src={brands[0].img}
        alt="banner"
        style={{ width: "100%" }}
      />

      {/* Grid */}
      <div className="brands-grid">
        {brands.slice(1).map((brand, index) => (
          <div className="brand-card" key={index}>
            <img
              src={brand.img}
              alt={brand.text}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <p className="brand-text">{brand.text}</p>
          </div>
        ))}
      </div>

      <Link to="/newnykaa" className="btn">
        <button className="explore-btn">
          Explore All Brands
        </button>
      </Link>
    </div>
  );
};

export default Brands;
