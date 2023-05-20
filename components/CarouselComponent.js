import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent({ carousels }) {
  return (
    <div className="w-100">
      <Carousel id="myCarousel" data-ride="carousel">
        {carousels?.map((carousel, index) => {
          return (
            <Carousel.Item style={{ height: "500px" }} key={index}>
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
              <div className="container">
                <div
                  className={`carousel-caption ${
                    index === 0
                      ? "text-start"
                      : index === 1
                      ? "text-center"
                      : "text-end"
                  }`}
                >
                  <h1>{carousel?.carousels?.carouselHead}</h1>
                  <p>{carousel?.carousels?.carouselText}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      {index === 0
                        ? "Sign up today"
                        : index === 1
                        ? "Learn more"
                        : "Browse gallery"}
                    </a>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
