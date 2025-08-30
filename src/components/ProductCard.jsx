import { Link } from "react-router-dom";
import "./sproductcard.css";

export default function ProductCard({ p }) {
  return (
    <Link to={`/siparis/${p.id}`} state={p} className="product product--link">
      <img src={p.img} alt={p.title} className="product__img" />
      <div className="product__body">
        <h5 className="product__title">{p.title}</h5>
        <div className="product__meta">
          <span>{p.rating}</span>
          <span>({p.votes})</span>
          <strong className="product__price">{p.price}₺</strong>
        </div>
      </div>
    </Link>
  );
}