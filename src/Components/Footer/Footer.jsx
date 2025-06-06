import React from 'react'
import './Footer.css'
import LinkList from '../Link List/LinkList';

const Footer = () => {
  return (
    <footer class="footer-section" id="footer">
      <div class="section-content flex-div">
        <p class="copyright-text">© 2024 HIV System</p>
        <div class="social-link-list">
          <LinkList/>
        </div>
        <p class="policy-text">
          <a href="#" class="policy-link">
            Privacy Policy
          </a>
          <span class="separator">•</span>
          <a href="#" class="policy-link">
            Refund policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer