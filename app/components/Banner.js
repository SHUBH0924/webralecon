import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src='https://webralecon.com/images/slider-img/banner4.jpg' height={742} className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://webralecon.com/images/slider-img/banner3.jpg' height={742} className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
