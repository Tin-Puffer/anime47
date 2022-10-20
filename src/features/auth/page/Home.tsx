import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './homeStyle.scss';
function CustomSlide() {
    return (
        <div className="carousel-item">
            <div className="block-wrapper">
                <div className="movie-title-1"> Isekai Uncle, ...</div>
                <div className="movie-status">07/??</div>
            </div>
        </div>
    );
}
function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
        className="carousel-arrow-btn"
            style={{
                top: '50%',
                left: "10px",
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <span
                style={{
                    height: ' 24px',
                    width: '16px',
                    display: 'block',
                    background: ' url(https://anime47.com/skin/24032017/img/image.png?v=1.2) no-repeat -2px -535px',
                }}
            ></span>
        </div>
    );
}
function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="carousel-arrow-btn"
            style={{
                
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <span
                style={{
                    height: ' 24px',
                    width: '16px',
                    display: 'block',
                    background: ' url(https://anime47.com/skin/24032017/img/image.png?v=1.2) no-repeat -23px -535px',
                }}
            ></span>
        </div>
    );
}
export default function CarouselHome() {
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: function (index: number) {
           
        },
    };
    return (
        <div>
            <Slider {...settings}>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>

                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
            </Slider>
        </div>
    );
}
