import { Routes, Route } from "react-router-dom";
import Splash from "./components/Splash.jsx";
import Home from "./components/Home.jsx";
import OrderPage from "./components/OrderPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/anasayfa" element={<Home />} />
      {/* ürün kartından yönlenecek sayfa */}
      <Route path="/siparis/:id" element={<OrderPage />} />
    </Routes>
  );
}