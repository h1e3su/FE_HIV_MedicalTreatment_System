import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>

    
      <div className="home">
        {/* Hero section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Tư Vấn & Điều Trị HIV <br></br>
              <span>An Toàn, Chuyên Nghiệp</span>
            </h1>
            <p>
              Đặt lịch tư vấn, xét nghiệm hoặc theo dõi điều trị HIV trực tuyến
              với đội ngũ y tế giàu kinh nghiệm. Cam kết bảo mật tuyệt đối và
              chăm sóc tận tâm.
            </p>
            <div className="hero-buttons">
              <Link to="/survey" className="btn-primary">
                Khảo sát nguy cơ
              </Link>
              <Link to="/booking" className="btn-outline">
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="features">
          <h2>Dịch Vụ Nổi Bật</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🧑‍⚕️</div>
              <h3>Tư vấn HIV</h3>
              <p>
                Tư vấn tâm lý & giáo dục sức khỏe 1:1 qua video hoặc gặp trực
                tiếp.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🧪</div>
              <h3> Tư vấn ẩn danh</h3>
              <p>
                Đặt lịch xét nghiệm HIV nhanh.<br></br> Kết quả riêng tư.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">💊</div>
              <h3>Theo dõi điều trị</h3>
              <p>
                Hỗ trợ điều trị ARV, kiểm tra định kỳ & theo dõi hiệu quả điều
                trị.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="why-choose">
          <h2>Tại Sao Chọn Chúng Tôi?</h2>
          <ul className="reasons">
            <li>✅ Đội ngũ chuyên gia giàu kinh nghiệm</li>
            <li>✅ Đặt lịch nhanh chóng, hoàn toàn trực tuyến</li>
            <li>✅ Hỗ trợ tận tâm trước – trong – sau điều trị</li>
          </ul>
        </section>

        {/* Call to action */}
        <section className="cta">
          <h2>Bắt đầu hành trình chăm sóc sức khỏe của bạn ngay hôm nay</h2>
          <Link to="/booking" className="btn-primary large">
            Đặt lịch tư vấn
          </Link>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Trung Tâm HIV+</h3>
            <p>
              Dẫn đầu trong tư vấn, xét nghiệm và điều trị HIV tại Việt Nam. Bảo
              mật – Tận tâm – Chuyên nghiệp.
            </p>
          </div>

          <div className="footer-column">
            <h4>Liên kết</h4>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/about">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/booking">Đặt lịch</Link>
              </li>
              <li>
                <Link to="/blogs">Kiến thức</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Liên hệ</h4>
            <p>📍 123 Đường Sức Khỏe, Quận 1, TP.HCM</p>
            <p>📞 0909 123 456</p>
            <p>✉️ contact@hivplus.vn</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Trung Tâm HIV+. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
