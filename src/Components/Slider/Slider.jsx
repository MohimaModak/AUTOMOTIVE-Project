import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>

        
      <div className="relative" data-aos="flip-up ">
        <div className="color"></div>
        <Carousel>
          <div className="relative h-[500px]">
            <img
              src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/09/volvo-cars-the-best-in-luxury-at-best-price-ad-times-of-india-mumbai-22-09-2018.png"
              className="object-cover h-full"
            />
            
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://i.ytimg.com/vi/zL96x8GRI24/maxresdefault.jpg"
              className="object-cover h-full"
            />
            
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-video-ads-design-template-641b064c83cc2b35566ed5743c9736cd_screen.jpg?ts=1648183002"
              className="object-cover h-full"
            />
          
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
