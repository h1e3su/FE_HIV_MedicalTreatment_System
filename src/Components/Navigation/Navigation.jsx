import React from "react";
import "./Navigation.css";
import home_icon from "../../assets//images/logo.png"; // Assuming you have a home icon

const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav class="navbar flex-div">
        <div class="nav-brand">
          <a href="#home" class="nav-logo">
            <img src={home_icon} alt="Logo" />
          </a>
        </div>
        <ul class="nav-menu flex-div">
          <button id="menu-close-button" class="fas fa-times"></button>
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Giới thiệu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Thông tin dược
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Dịch vụ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Các bài blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Kết quả xét nghiệm
            </a>
          </li>
        </ul>
        <button id="menu-open-button" class="fas fa-bars"></button>
      </nav>
    </div>
  );
};

export default Navigation;
