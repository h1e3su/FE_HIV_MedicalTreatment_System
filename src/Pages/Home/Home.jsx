import React from "react";
import banner_image from "../../assets/images/banner.jpg";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_picture from "../../assets/images/hero.jpg";
import "./Home.css";
import LinkList from "../../components/Link List/LinkList.jsx";
import doctor_icon from "../../assets/images/doctor.jpg";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      {/* Banner section */}
      <section className="banner-section">
        <img className="banner" src={banner_image} alt="banner" />
      </section>
      {/* Hero section */}
      <section className="hero-section">
        <div className="section-content flex-div">
          <div className="hero-details">
            <h2 className="title">Chăm Sóc HIV Thông Minh</h2>
            <h3 className="sub-title">
              Trao quyền cho sức khỏe tốt hơn với công cụ điều trị thông minh!
            </h3>
            <p className="description">
              Trải nghiệm dịch vụ chăm sóc HIV dễ tiếp cận, chính xác và đầy
              nhân ái thông qua hệ thống tiên tiến của chúng tôi. Đặt lịch xét
              nghiệm, nhận hướng dẫn điều trị và nhắc nhở — tất cả trong một nền
              tảng.
            </p>
            <div className="buttons">
              <a href="#" className="button order-now">
                Đăng ký ngay
              </a>
              <a href="#" className="button contact-us">
                Họp trực tuyến
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={hero_picture} alt="Hero" className="hero-image" />
          </div>
        </div>
        {/* About section */}
      </section>
      <section className="about-section" id="about">
        <div className="section-content flex-div">
          <div className="about-image-wrapper">
            <img src={doctor_icon} alt="about" className="about-image" />
          </div>
          <div className="about-details">
            <h2 className="section-title">Về Chúng Tôi</h2>
            <p className="text">
              Hỗ trợ cuộc sống với Chăm Sóc HIV Thông Minh Chúng tôi cam kết cải
              tiến việc điều trị HIV thông qua đổi mới và lòng nhân ái. Hệ thống
              của chúng tôi hỗ trợ các bệnh viện, phòng khám và tổ chức phi
              chính phủ (NGO) cung cấp dịch vụ xét nghiệm kịp thời, liệu pháp
              ARV cá nhân hóa và theo dõi điều trị liên tục. Với trọng tâm là
              khả năng tiếp cận và tính bảo mật, chúng tôi đảm bảo mọi cá nhân
              đều nhận được sự hỗ trợ họ cần — mọi lúc, mọi nơi.
            </p>
            <div className="links-container">
              {" "}
              <LinkList />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
