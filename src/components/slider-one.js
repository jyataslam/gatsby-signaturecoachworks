import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
import "@/css/hero.css";

const SliderOne = () => {
  const { subTitle, title, button, logo } = SliderOneData[0];

  return (
    <section className="hero">
      {/* <Swiper {...mainSlideOptions}>
        {SliderOneData.map(
          ({ image, subTitle, title, button, logo }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <Container>
                <Row>
                  <Col lg={12} className="text-center">
                    <p className="main-slider__subtext">{subTitle}</p>
                    <h3 className="main-slider__title">{title}</h3>
                    <img
                      src={logo}
                      alt={title}
                      className="hero-logo main-slider__title"
                    />
                    <Link to={button.url} className={`common_btn red_bg`}>
                      <span>{button.label}</span>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
          </Swiper> */}
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <p className="hero-subtext">{subTitle}</p>
            <img src={logo} alt={title} className="hero-logo" />
            <Link to={button.url} className={`common_btn red_bg`}>
              <span>{button.label}</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SliderOne;
