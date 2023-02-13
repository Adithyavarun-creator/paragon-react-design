import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  {
    id: 1,
    imageLink:
      "https://images.unsplash.com/photo-1675789652587-5765ab02ec80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    text: "Climb Mountains",
  },
  {
    id: 2,
    imageLink:
      "https://images.unsplash.com/photo-1676085272653-5e77875eed3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60",
    text: "Night is Dark",
  },
  {
    id: 3,
    imageLink:
      "https://images.unsplash.com/photo-1675969563450-522861e76929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
    text: "Volcano Island",
  },
  {
    id: 4,
    imageLink:
      "https://images.unsplash.com/photo-1676039568697-e8c51489b0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    text: "Street Shops",
  },
  {
    id: 5,
    imageLink:
      "https://images.unsplash.com/photo-1672935375117-1122ad335a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    text: "Go on for a boat trip",
  },
  {
    id: 6,
    imageLink:
      "https://images.unsplash.com/photo-1676196919586-32234be2a211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    text: "Night Stay",
  },
  {
    id: 7,
    imageLink:
      "https://images.unsplash.com/photo-1676044951850-4f4e36ee07f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
    text: "Snow Trip",
  },
  {
    id: 8,
    imageLink:
      "https://images.unsplash.com/photo-1676192203509-3c29d7bb5763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    text: "Day with Sunrise",
  },
  {
    id: 9,
    imageLink:
      "https://images.unsplash.com/photo-1675908057439-887286e7fe0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60",
    text: "Beach Vacation",
  },
  {
    id: 10,
    imageLink:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVldGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
    text: "Public Meetings",
  },
];

const ReactSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="sliderBox">
        {carouselImages.map((image) => (
          <div className="sliderBox" key={image.id}>
            <div>
              <img className="sliderImage" alt="" src={image.imageLink} />
            </div>
            <div className="sliderText">
              <span className="sliderImageText">{image.text}</span>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mb2" />
    </>
  );
};

export default ReactSlider;
