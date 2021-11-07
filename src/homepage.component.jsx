import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">TIN TỨC MỚI</h1>
          <span className="subtitle">Thông tin về những thay đổi mới...</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CẨM NANG</h1>
          <span className="subtitle">Nơi bạn tìm thấy chính bạn...</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CÁC GIẢI ĐẤU</h1>
          <span className="subtitle">Thông tin về các giải đấu lớn...</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">VIDEO GIẢI TRÍ</h1>
          <span className="subtitle">
            Nơi bạn tìm thấy nhiều cung bậc cảm xúc...
          </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SỰ KIỆN ĐANG DIỄN RA</h1>
          <span className="subtitle">Thông tin khuyến mãi bạn sẽ cần...</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
