import "./shome.css";
import CategoryBar from "./CategoryBar.jsx";
import PromoGrid from "./PromoGrid.jsx";
import MenuTabs from "./MenuTabs.jsx";
import ProductGrid from "./ProductGrid.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <div className="home">
      <CategoryBar />
      <PromoGrid />
      <section className="home__title">
        <p className="home__subtitle">en çok paketlenen menüler</p>
        <h2>Açıktıran Kodlara Doyuran Lezzetler</h2>
      </section>
      <MenuTabs />
      <ProductGrid />
      <Footer />
    </div>
  );
}