import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./css/carousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselSlides: [],
      options: {
        spaceBetween: 50,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        navigation: true,
        autoplay: {
          delay: 5000,
        },
        modules: [Navigation],
      },
    };
  }

  componentDidMount = async () => {
    //fetch carousel slides from db
    const response = await fetch(
      "http://localhost/eupa_api/api/read_carousel_slides.php",
      {
        method: "GET",
      }
    );
    const slides = await response.json();
    this.setState({ carouselSlides: slides });
  };

  getCarouselItems = () => {
    return this.state.carouselSlides.map((slide) => {
      return (
        <SwiperSlide key={"Slide " + slide.id}>
          <Slide
            src={slide.src}
            title={slide.title}
            paragraph={slide.paragraph}
            alt={slide.alt}
          />
        </SwiperSlide>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Swiper {...this.state.options} className="mySwiper">
          {this.getCarouselItems()}
        </Swiper>
      </div>
    );
  }
}
