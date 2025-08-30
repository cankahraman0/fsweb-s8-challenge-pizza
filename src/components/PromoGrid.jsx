import "./spromo.css";
import kart1 from "../../images/iteration-2-images/cta/kart-1.png";
import kart2 from "../../images/iteration-2-images/cta/kart-2.png";
import kart3 from "../../images/iteration-2-images/cta/kart-3.png";

export default function PromoGrid() {
  return (
    <section className="promo">
      {/* SOL: Kırmızı zemin + büyük pizza */}
      <article className="p-card p-left" style={{ "--img": `url(${kart1})` }}>
        <div className="p-text p-left__text">
          <h3 className="p-title-lg">Özel Lezzetus</h3>
          <p className="p-sub">Position:Absolute Acı Burger</p>
        </div>
        <button className="p-chip">sipariş ver</button>
      </article>

      {/* SAĞ-ÜST: Koyu kart + burger */}
      <article className="p-card p-dark" style={{ "--img": `url(${kart2})` }}>
        <div className="p-text p-dark__text">
          <h4 className="p-title-md">Hackathon Burger Menü</h4>
        </div>
        <button className="p-chip">sipariş ver</button>
      </article>

      {/* SAĞ-ALT: Bej kart + kurye */}
      <article className="p-card p-beige" style={{ "--img": `url(${kart3})` }}>
        <div className="p-text p-beige__text">
          <h4 className="p-title-md">
            Cooooook hızlı <br /> npm gibi kurye
          </h4>
        </div>
        <button className="p-chip">sipariş ver</button>
      </article>
    </section>
  );
}
