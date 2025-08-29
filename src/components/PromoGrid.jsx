import "./spromo.css";
// arka plan görselleri yerine sade kartlar kullandık; istersen assets’lerini bağlayabilirsin.
export default function PromoGrid() {
  return (
    <section className="promo">
      <article className="promo__big">
        <div>
          <h3>Özel Lezzetus</h3>
          <p>Position:Absolute Acı Burger</p>
        </div>
        <button className="promo__btn">sipariş ver</button>
      </article>

      <article className="promo__card dark">
        <h4>Hackathon Burger Menü</h4>
        <button className="promo__btn white">sipariş ver</button>
      </article>

      <article className="promo__card">
        <h4>
          Cooooook hızlı <br /> npm gibi kurye
        </h4>
        <button className="promo__btn">sipariş ver</button>
      </article>
    </section>
  );
}