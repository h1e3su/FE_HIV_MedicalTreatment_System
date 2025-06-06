import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/images/menu.png"; // Đường dẫn mới
import logo from "../../assets/images/ribon.webp"; // Đường dẫn mới
import upload_icon from "../../assets/images/upload.png"; // Đường dẫn mới
import more_icon from "../../assets/images/more.png"; // Đường dẫn mới
import notification_icon from "../../assets/images/notification.png"; // Đường dẫn mới
import profile_icon from "../../assets/images/jack.png"; // Đường dẫn mới

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="Menu_icon" />
        <img className="logo" src={logo} alt="Logo" />
        <p className="system-name">MedLed</p>
      </div>

      {/* <div className='nav-middle flex-div'>
        <div className='search-box flex-div' >
            <input type='text' placeholder='Search'/>
            <img src={search_icon} alt='Search_icon'/>
        </div>
      </div> */}

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload Icon" />
        <img src={more_icon} alt="More Icon" />
        <img src={notification_icon} alt="Notification Icon" />
        <img src={profile_icon} className="user-icon" alt="Profile Icon" />
      </div>
    </nav>
  );
};

export default Navbar;