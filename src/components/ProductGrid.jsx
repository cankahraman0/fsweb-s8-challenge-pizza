import "./sproductgrid.css";
import ProductCard from "./ProductCard.jsx";

// Görseller projenin kökünde: images/iteration-2-images/pictures/*
import img1 from "../../images/iteration-2-images/pictures/food-1.png";
import img2 from "../../images/iteration-2-images/pictures/food-2.png";
import img3 from "../../images/iteration-2-images/pictures/food-3.png";

const products = [
  { id: 1, title: "Terminal Pizza", price: 60, rating: 4.9, votes: 200, img: img1 },
  { id: 2, title: "Position Absolute Acı Pizza", price: 85, rating: 4.9, votes: 828, img: img2 },
  { id: 3, title: "useEffect Tavuklu Burger", price: 75, rating: 4.9, votes: 462, img: img3 },
];

export default function ProductGrid() {
  return (
    <section className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </section>
  );
}