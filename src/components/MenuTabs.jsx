import "./smenutabs.css";
const tabs = [
  { icon: "🍜", label: "Ramen" },
  { icon: "🍕", label: "Pizza", active: true },
  { icon: "🍔", label: "Burger" },
  { icon: "🍟", label: "French fries" },
  { icon: "🥪", label: "Fast food" },
  { icon: "🥤", label: "Soft drinks" },
];
export default function MenuTabs() {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button key={t.label} className={`tab ${t.active ? "is-active" : ""}`}>
          <span className="tab__icon">{t.icon}</span>
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}