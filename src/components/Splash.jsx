import { Link } from "react-router-dom";
import "./stsplash.css";
import heroImage from "../../sample-interfaces/iteration-1/Home.png";

export default function Splash() {
  return (
    <section className="splash-hero">
      <img className="splash-hero__bg" src={heroImage} alt="Home" />
      <div className="splash-hero__center">
        {/* önce /devam’dı → /anasayfa yaptık */}
        <Link to="/anasayfa" className="splash-btn">AÇIKTIM</Link>
      </div>
    </section>
  );
}