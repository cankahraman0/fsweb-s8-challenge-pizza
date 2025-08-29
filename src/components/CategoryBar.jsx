import "./scategorybar.css";

const cats = [
  { icon: "🍜", label: "YENİ Kore" },
  { icon: "🍕", label: "Pizza" },
  { icon: "🍔", label: "Burger" },
  { icon: "🍟", label: "Kızartmalar" },
  { icon: "🥪", label: "Fast food" },
  { icon: "🥤", label: "Gazlı içecek" },
];

export default function CategoryBar() {
  return (
    <div className="catbar">
      <div className="catbar__inner">
        {cats.map((c) => (
          <button key={c.label} className="catpill">
            <span className="catpill__icon">{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}