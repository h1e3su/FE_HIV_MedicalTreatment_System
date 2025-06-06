import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    // Xử lý đăng ký tài khoản ở đây
    console.log("Registered:", form);
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <h2>Chào mừng bạn đến với</h2>
          <h1>MedCare Clinic</h1>
          <p>
            Đăng ký tài khoản để đặt lịch tư vấn, xét nghiệm và điều trị an toàn
            & bảo mật.
          </p>
        </div>
        <div className="register-right">
          <h2 className="form-title">Đăng Ký Tài Khoản</h2>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="username">Tên người dùng</label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="error-msg">{error}</div>}
            <button type="submit" className="register-button">
              Đăng ký
            </button>
          </form>
          <p className="login-link">
            Đã có tài khoản? <a href="/login">Đăng nhập</a>
          </p>
        </div>
      </div>
    </div>
  );
}
