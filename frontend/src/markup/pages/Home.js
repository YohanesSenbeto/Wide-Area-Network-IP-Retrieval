import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/images/banner.png";
import guide from "../../assets/images/guide.png";
import routerstep from "../../assets/images/routerstep.png";
import "./Home.css";

function Home(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1, // Show two slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="home-slider-container">
            <Slider {...settings}>
                <div>
                    <img src={banner} alt="Banner" />
                </div>
                <div>
                    <img src={guide} alt="Guide" />
                </div>
                <div>
                    <img src={routerstep} alt="Router Step" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
}

export default Home;
