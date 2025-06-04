// src/components/Topbar.jsx
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-left">
          📞 Hotline: <a href="tel:0909123456">0909 123 456</a>
        </div>
        <div className="topbar-right">
          <span style={{ whiteSpace: "nowrap" }}>
            📧 <a href="mailto:contact@hivplus.vn">contact@hivplus.vn</a> | 🕒
            Thời gian làm việc: 8h00 - 20h00 (T2 - CN)
          </span>
        </div>
      </div>
    </div>
  );
}
