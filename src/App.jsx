import { Routes, Route } from "react-router-dom";
import Splash from "./components/Splash.jsx";
import Home from "./components/Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/anasayfa" element={<Home />} />
    </Routes>
  );
}