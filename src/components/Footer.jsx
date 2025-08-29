import "./sfooter.css";
export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">Teknolojik<br/>Yemekler</div>
          <p>341 Londonderry Road, İstanbul Türkiye</p>
          <p>aciktim@teknolojikyemekler.com</p>
          <p>+90 216 123 45 67</p>
        </div>
        <div>
          <h4>Sıcacık Menüler</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>useEffect Tavuklu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div>
          <h4>Instagram</h4>
          <div className="footer__insta">
            {Array.from({length:8}).map((_,i)=>(
              <img key={i} alt="" src={`https://picsum.photos/seed/ig${i}/120/120`} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer__copy">© {new Date().getFullYear()} Teknolojik Yemekler.</div>
    </footer>
  );
}