import React from "react";
import "./LinkList.css";

const LinkList = () => {
  return (
    <div class="social-link-list flex-div">
      <a href="#" class="social-link facebook-icon">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="#" class="social-link instagram-icon">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="#" class="social-link x-icon">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  );
};

export default LinkList;
