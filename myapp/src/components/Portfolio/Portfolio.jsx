import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/hoc2.png";
import Ecommerce from "../../img/Minio.png";
import HOC from "../../img/Chathub.png";
import MusicApp from "../../img/Piechart.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}></span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
          <img src={HOC} alt="" className="yas" />
          <div className="web"><p>Chat-Hub website</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" className="yas"  />
          <div className="web"><p>Minio</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" className="yas" />
          <div className="web"><p>Piechart</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" className="yas" />
          <div className="web"><p>Data Visualisation</p></div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
