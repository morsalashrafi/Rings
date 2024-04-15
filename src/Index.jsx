import React from "react";
import Slider from "react-slick";
import { Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Index.css";
import { useState } from "react";
import Play from "./assets/images/play.png";
import AboutComponent from "./components/AboutComponent";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import ServiceComponent from './components/ServiceComponent';
import BlogComponent from './components/BlogComponent';
import ContactComponent from "./components/ContactComponent";
import Groomsmen from "./components/Groomsmen";
import Say from "./components/Say";


function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
  };

 

  return (
    <div>
      {/* Header */}
      <div>
        {/* Banner */}
        <header className="full_bg">
          <NavComponent />

          <section className="banner_main">
            <div
              id="myCarousel"
              className="carousel slide banner"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className={activeIndex === 0 ? "active" : ""}
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="1"
                  className={activeIndex === 1 ? "active" : ""}
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="2"
                  className={activeIndex === 2 ? "active" : ""}
                ></li>
              </ol>
              <section className="banner_main">
                <Slider {...settings}>
                  <CarouselItem />
                  <CarouselItem />
                  <CarouselItem />
                </Slider>
              </section>
            </div>
          </section>
        </header>

        {/* Play */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="play_section">
                <div className="play_btn">
                  <img src={Play} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Plane */}
      <ServiceComponent />

      {/* Groomsmen */}
      <Groomsmen/>

      {/* About */}
      <AboutComponent />

      {/* Blog */}
      <BlogComponent />

      {/* Say */}
      <Say/>

      {/* Contact */}
      <ContactComponent/>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default Index;

function CarouselItem() {
  return (
    <div className="container">
      <div className="carousel-caption banner_po">
        <div className="row">
          <div className="carousel_banner ">
            <div className="build_box">
              <h1>
                Wedding <span className="orang"> Couple</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
              <a
                className="read_more quote_btn"
                role="button"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


