import { Routes, Route } from "react-router-dom";
import Splash from "./components/Splash.jsx";

function Devam() {
  return <div style={{ padding:24 }}>DEVAM SAYFASI</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/devam" element={<Devam />} />
    </Routes>
  );
}