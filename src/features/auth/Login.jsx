import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validUser = { username: "user", password: "123456", role: "patient" };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.username === validUser.username &&
      form.password === validUser.password
    ) {
      navigate("/");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <h2>Chào mừng bạn đến với</h2>
          <h1>MedCare Clinic</h1>
          <p>tư vấn & điều trị HIV an toàn và tận tâm.</p>
        </div>
        <div className="login-right">
          <h2 className="form-title">Đăng Nhập</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
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
            {error && <div className="error-msg">{error}</div>}
            <button type="submit" className="login-button">
              Đăng nhập
            </button>
          </form>
          <p className="register-link">
            Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
          </p>
        </div>
      </div>
    </div>
  );
}
