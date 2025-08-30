import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import axios from "axios";
import "./sorder.css";

const SIZES = ["S", "M", "L"];
const DOUGHS = ["İnce", "Orta", "Kalın"];
const TOPPINGS = [
  "Pepperoni","Domates","Biber","Sosis","Mısır","Sucuk",
  "Kanada Jambonu","Ananas","Tavuk Izgara","Jalapeno","Soğan","Sarımsak","Kabak"
];

export default function OrderPage() {
  const nav = useNavigate();
  const { state: product } = useLocation(); // ProductCard -> state
  // Ürün olmadan gelinirse geri gönder
  const basePrice = product?.price ?? 85.5;

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [qty, setQty] = useState(1);
  const TOPPING_PRICE = 5;

  const price = useMemo(() => {
    const extras = toppings.length * TOPPING_PRICE;
    return ((basePrice + extras) * qty).toFixed(2);
  }, [basePrice, toppings.length, qty]);

  const isValid =
    name.trim().length >= 3 &&
    size &&
    dough &&
    toppings.length >= 4 &&
    toppings.length <= 10 &&
    qty > 0;

  const toggleTopping = (t) => {
    setToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : prev.concat(t)
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return; // HTML disabled'a ek olarak JS koruması
    try {
      // API: https://reqres.in/api/pizza
      const payload = {
        isim: name.trim(),
        urun: product?.title ?? "Position Absolute Acı Pizza",
        boyut: size,
        hamur: dough,
        malzemeler: toppings,
        adet: qty,
        not: note,
        birimFiyat: basePrice,
        ucretToplam: Number(price),
      };
      const res = await axios.post("https://reqres.in/api/pizza", payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("SİPARİŞ KAYDI (mock API cevabı):", res.data);
      console.log("SİPARİŞ ÖZETİ:", payload);
      alert("Sipariş alındı! (mock) — Konsolu kontrol et.");
      nav("/anasayfa");
    } catch (err) {
      console.error("Sipariş hatası:", err);
      alert("Bir şeyler ters gitti (mock).");
    }
  }

  return (
    <section className="order-wrap">
      <header className="order-head">
        <div className="brand">Teknolojik Yemekler</div>
      </header>

      <main className="order-main">
        <div className="order-hero" />
        <div className="order-content">
          <nav className="crumbs">
            <span>Anasayfa</span> <span>›</span> <span>Seçenekler</span>{" "}
            <span>›</span> <span className="accent">Sipariş Oluştur</span>
          </nav>

          <h2 className="order-title">{product?.title ?? "Position Absolute Acı Pizza"}</h2>
          <div className="order-meta">
            <div className="price">{basePrice.toFixed(2)}₺</div>
            <div className="rating">4.9</div>
            <div className="votes">(200)</div>
          </div>

          <p className="order-desc">
            Frontend dev olarak hâlâ position: absolute kullanıyorsan bu çok acı pizza tam
            sana göre. Domates, peynir ve çeşit çeşit malzemelerle kaplanmış, daha sonra
            geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen lezzetli bir
            pizza. Küçük bir pizzaya bazen pizzetta denir.
          </p>

          <form className="order-form" onSubmit={handleSubmit}>
            {/* Boyut */}
            <div className="field">
              <label>Boyut Seç <b className="req">*</b></label>
              <div className="radio-row">
                {SIZES.map((s) => (
                  <label key={s} className={`radio ${size===s ? "is-checked":""}`}>
                    <input
                      type="radio"
                      name="size"
                      value={s}
                      checked={size === s}
                      onChange={() => setSize(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Hamur */}
            <div className="field">
              <label>Hamur Seç <b className="req">*</b></label>
              <select
                value={dough}
                onChange={(e) => setDough(e.target.value)}
                className="select"
              >
                <option value="" disabled>— Hamur Kalınlığı —</option>
                {DOUGHS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* İsim */}
            <div className="field">
              <label>İsim <b className="req">*</b></label>
              <input
                className="text"
                placeholder="Adınız (min 3 karakter)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <small className={name.trim().length>=3 ? "ok" : "warn"}>
                {name.trim().length>=3 ? "✓ Uygun" : "En az 3 karakter olmalı"}
              </small>
            </div>

            {/* Malzemeler */}
            <div className="field">
              <label>Ek Malzemeler</label>
              <div className="hint">En fazla 10, en az 4 malzeme seçiniz. 5₺</div>
              <div className="toppings">
                {TOPPINGS.map((t) => (
                  <label key={t} className={`check ${toppings.includes(t)?"is-checked":""}`}>
                    <input
                      type="checkbox"
                      checked={toppings.includes(t)}
                      onChange={() => toggleTopping(t)}
                    />
                    {t}
                  </label>
                ))}
              </div>
              <small className={(toppings.length>=4 && toppings.length<=10) ? "ok" : "warn"}>
                Seçili: {toppings.length} / 4–10
              </small>
            </div>

            {/* Not */}
            <div className="field">
              <label>Sipariş Notu</label>
              <textarea
                className="text"
                rows={3}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            {/* Adet + Özet */}
            <div className="flex-row">
              <div className="qty">
                <button type="button" onClick={() => setQty((q)=>Math.max(1, q-1))}>-</button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((q)=>q+1)}>+</button>
              </div>

              <aside className="summary">
                <div className="sum-row">
                  <span>Seçimler</span>
                  <b>{(toppings.length*TOPPING_PRICE).toFixed(2)}₺</b>
                </div>
                <div className="sum-row total">
                  <span>Toplam</span>
                  <b>{price}₺</b>
                </div>
                <button type="submit" className="submit" disabled={!isValid}>
                  SİPARİŞ VER
                </button>
                {!isValid && (
                  <small className="warn block">
                    Lütfen zorunlu alanları doldurun (İsim, Boyut, Hamur, 4–10 malzeme).
                  </small>
                )}
              </aside>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}